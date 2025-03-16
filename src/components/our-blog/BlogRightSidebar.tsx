import { blogCategories } from "@/data/blog-data";
import Link from "next/link";
import React from "react";
import RecentPosts from "./RecentPosts";
import BlogCategory from "./BlogCategory";

const BlogRightSidebar = () => {
  return (
    <>
      <div className="col-lg-4">
        <RecentPosts />
        <div className="posts mt-4">
          <h4>Categories</h4>
          <div className="line"></div>
          {/* <ul className="categories">
            {blogCategories?.map((item) => (
              <li>
                <Link href={item.href}>
                  <span>{item?.category || "Unknown"}</span>
                  <span>11</span>
                </Link>
              </li>
            ))}
          </ul> */}
          <BlogCategory />
        </div>
        <div className="posts mt-4">
          <h4>Archives</h4>
          <div className="line"></div>
          <ul className="categories meta">
            <li>
              <Link href="#">
                <span>July 2021</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="posts mt-4">
          <h4>Meta</h4>
          <div className="line"></div>
          <ul className="categories meta">
            <li>
              <Link href="#">
                <span>Solar Panels</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Solar Batteries</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Australian based Solar Company</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Kangaroo Solar</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogRightSidebar;
