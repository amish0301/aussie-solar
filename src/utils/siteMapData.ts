import blog from "@/models/blog";
import { connectDB } from "./utils";

const fetchData = async () => {
    try {
        await connectDB();
        const blogs = await blog.find({}, "_id").lean();
        return blogs;
    } catch (error) {
        console.error("Error fetching blog data for sitemap:", error);
        return [];
    }
};

export async function fetchBlogDataFromDB() {
    const blogData = await fetchData();

    const refineData = blogData.map((item: { _id: any }) => ({
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog-details/${item._id}`,
        priority: 0.9,
    }));

    return refineData;
}