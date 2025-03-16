import Blog from "@/models/blog";
import { connectDB } from "@/utils/utils";
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const limit = Math.max(parseInt(searchParams.get("limit") || "4", 10), 1);
    const category = searchParams.get("category");
    const author = searchParams.get("author");

    let query: any = {};
    if (id) query._id = id;
    if (category) query.category = category;
    if (author) query.author = author;

    // console.log("Pagination Query:", { page, limit, category, query });

    // Count total blogs that match the query
    const totalBlogs = await Blog.countDocuments(query);

    // Fetch paginated blogs
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json(
      { success: true, blogs, totalBlogs, totalPages: Math.ceil(totalBlogs / limit), currentPage: page },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET API route:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// For Creating new Blog
export async function POST(req: NextRequest) {

  try {
    await connectDB();

    const body = await req.formData();
    const timestamp = Date.now();

    // Extracting values
    const title = body.get("title") as string;
    const content = body.get("description") as string;
    const category = body.get("category") as string;
    const summary = body.get("summary") as string;
    const image = body.get('image');

    let imgUrl = "";
    if (image && image instanceof File) {
      const imageByteData = await image.arrayBuffer();
      const buffer = Buffer.from(imageByteData);
      const path = `./public/${timestamp}_${image.name}`;
      writeFile(path, buffer);
      imgUrl = `/${timestamp}_${image.name}`;
    }

    await Blog.create({
      title,
      content,
      category,
      summary,
      image: `${imgUrl}`
    })

    return NextResponse.json({ success: true, message: "Blog Added Successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error in POST API route:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}