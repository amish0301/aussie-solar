"use client";
// import DashboardLayout from "@/layout/AdminDashboardLayout";
import Preloader from "@/utils/Preloader";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ConfirmDialog from "../shearedComponents/ConfirmDialog";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/blogs");
        const data = res.data;
        if (data.success) setBlogs(data?.blogs);
      } catch (error) {
        throw new Error("Error in fetching Blog Post");
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const openDialog = (id: string) => {
    setSelectedBlogId(id);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedBlogId(null);
    setIsDialogOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (!selectedBlogId) return;

    const toastId = toast.loading("Deleting blog...");
    try {
      await axios.delete(`/api/blogs/${selectedBlogId}`);
      toast.success("Blog deleted successfully!", { id: toastId });

      // Refresh or update the UI after deletion
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete blog", { id: toastId });
    } finally {
      closeDialog();
    }
  };

  return (
    <>
      <h2 className="mb-4">Manage Blogs</h2>
      {!isLoading ? (
        <div className="row" style={{overflow: 'auto'}}>
          {blogs.length > 0 ? (
            blogs.map((blog: any) => (
              <div key={blog._id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body position-relative">
                    <button
                      className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                      onClick={() => openDialog(blog._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>

                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">
                      {blog.content.length > 100
                        ? blog.content.substring(0, 100) + "..."
                        : blog.content}
                    </p>
                    <Link
                      href={`/admin/edit-blog/${blog._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Blogs Are there!!</p>
          )}
        </div>
      ) : (
        <Preloader />
      )}

      <ConfirmDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onConfirm={() => handleDelete(selectedBlogId!)}
      />
    </>
  );
}
