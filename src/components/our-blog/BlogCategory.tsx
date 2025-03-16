"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogCategory {
  _id: string;
  count: number;
}

const BlogCategory = () => {
  const [blogCategories, setBlogCategoriesData] = useState<BlogCategory[]>([]);

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const res = await axios.get("/api/blogs/stats");
        if (res.data?.success) {
          setBlogCategoriesData(res.data?.categoryStats);
        }
      } catch (error) {
        console.log("error in fetching category data");
      }
    }

    fetchCategoryData();
  }, []);

  return (
    <>
      <ul className="categories">
        {blogCategories &&
          blogCategories?.map((item, index) => (
            <li key={index}>
              <Link href={"#"}>
                <span>{item?._id || "Unknown"}</span>
                <span>{item?.count}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default BlogCategory;
