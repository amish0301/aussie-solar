import blog from "@/models/blog";
import { connectDB } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const categoryStats = await blog.aggregate([
            { $group: { _id: "$category", count: { $sum: 1 } } },
        ])


        return NextResponse.json({ success: true, categoryStats }, { status: 201 });
    } catch (error) {
        console.error("Error in POST API route:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}