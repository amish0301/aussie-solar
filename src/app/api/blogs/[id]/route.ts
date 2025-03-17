// For Edit

import { connectDB } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";
import Blog from '@/models/blog'
import cloudinary from "@/utils/cloudinary";


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { id } = params;

        const body = await req.json();
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title: body?.title, content: body?.description, category: body?.category, image: body?.image },
            { new: true }
        );

        if (!updatedBlog) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error updating blog:", error);
        return NextResponse.json(
            { success: false, message: "Error updating blog", error: (error as any).message },
            { status: 500 }
        );
    }
}


// For DELETE
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { id } = params;


        // find blog
        const blog = await Blog.findById(id);
        if (blog.image) {
            const imageUrl = blog.image;
            const publicId = imageUrl.split("/").pop()?.split(".")[0]; // Extract public ID from URL
      
            if (publicId) {
              // Delete image from Cloudinary
              await cloudinary.uploader.destroy(`blogs/${publicId}`);
            }
          }

        const blogDeleted = await Blog.findByIdAndDelete(id);

        if (!blogDeleted) return NextResponse.json({ success: false, message: "Error Occured while deleting blog" }, { status: 404 });

        return NextResponse.json({ success: true, message: "Blog Deleted Successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json(
            { success: false, message: "Error deleting blog", error: (error as any).message },
            { status: 500 }
        );
    }
}