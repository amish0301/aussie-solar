"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import upload_area from "../../../public/assets/img/upload_area.png";

const AddBlog = () => {
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    summary: "",
  });

  const onChangeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("summary", data.summary);
    if (image) formData.append("image", image);

    const toastId = toast.loading("Adding Blog...");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/blogs", formData);
      if (response.data.success) {
        toast.success(response.data.message, { id: toastId });
        setImage(null);
        setData({ title: "", description: "", category: "", summary: "" });
      }
    } catch (error) {
      toast.error("Error", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-3 px-4 px-sm-5">
        {/* Upload Thumbnail */}
        <p className="fs-5 fw-semibold">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-3 border border-2 rounded p-1 shadow-sm"
            src={!image ? upload_area : URL.createObjectURL(image as Blob)}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setImage(e.target.files[0]);
            }
          }}
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
          className="btn btn-dark my-4 px-4 py-2"
          disabled={isLoading}
        >
          {isLoading ? "ADDING..." : "ADD"}
        </button>
      </form>
    </>
  );
};

export default AddBlog;
