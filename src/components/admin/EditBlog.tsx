"use client";

import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import upload_area from "../../../public/assets/img/upload_area.png";

export default function EditBlog() {
  const { id } = useParams();
  const router = useRouter();

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    summary: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch Blog Data when component mounts
  useEffect(() => {
    async function fetchBlog() {
      const toastId = toast.loading("Fetching blog...");
      try {
        const res = await axios.get(`/api/blogs?id=${id}`);
        const blogData = res.data;
        if (!blogData.success) throw new Error("Failed to fetch blog");

        // set previous state
        setData({
          title: blogData.blogs[0].title,
          description: blogData.blogs[0].content,
          category: blogData.blogs[0].category,
          image: blogData.blogs[0].image || "",
          summary: blogData.blogs[0].summary || "",
        });
      } catch (error) {
        toast.error(String(error) || "Error while fetching blog", {
          id: toastId,
        });
        console.error("Error fetching blog:", error);
      } finally {
        toast.dismiss(toastId);
      }
    }

    if (id) fetchBlog();
  }, [id]);

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  // Handle Form Submission (Update Blog)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData = data;

    const toastId = toast.loading("Updating Blog data...");
    setIsLoading(true);

    if (!id) {
      toast.error("Invalid blog ID");
      return;
    }

    try {
      const res = await axios.put(`/api/blogs/${id}`, updatedData, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;
      if (!data.success) throw new Error("Failed to update blog");

      toast.success(data.message || "Blog Updated Successfully!", {
        id: toastId,
      });
      setData({
        title: "",
        description: "",
        category: "",
        image: "",
        summary: "",
      });
      setImageFile(null);
      setTimeout(() => router.push("/admin/blog-list"), 1000);
    } catch (error) {
      toast.error(String(error) || "Error in blog updated", { id: toastId });
    } finally {
      toast.dismiss(toastId);
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="py-2 px-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="pt-3 px-4 px-sm-5">
        {/* Upload Thumbnail */}
        <p className="fs-5 fw-semibold">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-3 border border-2 rounded p-1 shadow-sm"
            src={
              imageFile
                ? URL.createObjectURL(imageFile)
                : data.image || upload_area
            }
            width={140}
            height={70}
            alt="blog_thumb"
          />
        </label>
        <input
          onChange={handleImageChange}
          type="file"
          id="image"
          hidden
          required
        />

        {/* Blog Title */}
        <p className="fs-5 fw-semibold mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="form-control mt-2"
          type="text"
          placeholder="Type here"
          required
        />

        {/* Blog Description */}
        <p className="fs-5 fw-semibold mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="form-control mt-2"
          placeholder="Write content here..."
          rows={6}
          required
        ></textarea>

        {/* Blog Summary */}
        <p className="fs-5 fw-semibold mt-4">Blog Summary</p>
        <textarea
          name="summary"
          onChange={onChangeHandler}
          value={data?.summary || ""}
          className="form-control mt-2"
          placeholder="Write summary here.."
          rows={3}
          required
        ></textarea>

        {/* Blog Category */}
        <p className="fs-5 fw-semibold mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="form-select mt-2 text-secondary"
        >
          <option value="">Select Category</option>
          <option value="Packages">Solar Packages</option>
          <option value="Services">Solar Services</option>
          <option value="Products">Solar Products</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-dark mt-4 px-4 py-2 mb-3"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </>
  );
}
