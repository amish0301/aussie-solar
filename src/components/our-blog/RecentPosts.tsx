"use client";
import { IBlog } from "@/models/blog";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const RecentPosts = () => {
  const [posts, setPosts] = useState<IBlog[]>([]);
  const limit = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/blogs?limit=${limit}`, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.data?.success) setPosts(response.data?.blogs || []);
      } catch (error) {
        console.error("Failed to fetch recent posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="posts">
        <h4>Recent Posts</h4>
        <div className="line"></div>
        <ul className="recent-posts">
          {posts?.map((post) => (
            <li key={(post?._id).toString()} className="recent-post-item">
              <div className="post-content">
                <Link
                  href={`/blog-details/${post._id}`}
                  style={{ width: "100%" }}
                >
                  {post.title}
                </Link>
                <span>
                  {new Date(post?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="arrow-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
