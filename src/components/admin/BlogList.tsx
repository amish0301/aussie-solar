"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BlogTableItem from "./BlogTableItem";
import Preloader from "@/utils/Preloader";

interface blogInterface {
  _id: string;
  title: string;
  author: string;
  authorImg: string;
  updatedAt: string;
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<blogInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    const response = await axios.get(`/api/blogs`);
    setIsLoading(false);
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (bId: any) => {
    const toastId = toast.loading("Deleting...");

    try {
      const response = await axios.delete(`/api/blogs/${bId}`);
      toast.success(response.data.message, { id: toastId });
      fetchBlogs();
    } catch (error) {
      toast.error("Erro while deleting");
    } finally {
      toast.dismiss(toastId);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <div className="flex-grow pt-4 px-4 px-sm-5 pt-sm-5 ms-sm-4">
      <h1 className="mb-3 fw-bold text-black">All Blogs</h1>

      {/* Scrollable Table Container */}
      <div
        className="border border-secondary overflow-auto rounded shadow-sm"
        style={{ height: "80vh", maxWidth: "900px" }}
      >
        <table className="table table-striped table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="d-none d-sm-table-cell px-3 py-2">
                Author Name
              </th>
              <th scope="col" className="px-3 py-2">
                Blog Title
              </th>
              <th scope="col" className="px-3 py-2">
                Date
              </th>
              <th scope="col" className="px-2 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((item, index) => (
                <BlogTableItem
                  key={index}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  authorImg={item.authorImg}
                  date={item.updatedAt}
                  deleteBlog={deleteBlog}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
