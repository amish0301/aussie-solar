"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  completeName: string;
  email: string;
  comment: string;
}

const BlogCommentForm = () => {
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    toast.success("Commented Successfully", { id: toastId, duration: 2000 });
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="blog-form-div">
          <textarea
            placeholder="Comment"
            {...register("comment", {
              required: "Comment is required",
            })}
          ></textarea>
          {errors.comment && (
            <span className="error-message">{errors.comment.message}</span>
          )}
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="blog-form-div">
              <input
                type="text"
                placeholder="Complete Name"
                {...register("completeName", {
                  required: "Complete Name is required",
                })}
              />
              {errors.completeName && (
                <span className="error-message">
                  {errors.completeName.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-form-div">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Email Address"
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 mb-4">
          <input type="checkbox" id="cbx" style={{ display: "none" }} />
          <label htmlFor="cbx" className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>{" "}
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button className="button" type="submit">
          Post Comment
        </button>
      </form>
    </>
  );
};

export default BlogCommentForm;
