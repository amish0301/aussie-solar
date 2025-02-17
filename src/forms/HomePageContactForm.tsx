"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  completeName: string;
  email: string;
  phone: string;
  message: string;
}

const HomePageContactForm = () => {
  const {
    register,
    handleSubmit, 
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
  
    const toastId = toast.loading("");
    toast.success("Message Send Successfully", { id: toastId, duration: 2000 });
    reset()
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="request-quote-form">
        <div className="quote-form-div">
          <input
            type="text"
            placeholder="Complete Name"
            {...register("completeName", {
              required: "Complete Name is required",
            })}
          />
          {errors.completeName && (
            <span className="error-message">{errors.completeName.message}</span>
          )}
        </div>
        <div className="quote-form-div">
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
        <div className="quote-form-div">
          <input
            type="text"
            {...register("phone", {
              required: "Phone is required",
            })}
            placeholder="Phone No"
          />
          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </div>
        <div className="quote-form-div">
          <textarea
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
            })}
          ></textarea>
          {errors.message && (
            <span className="error-message">{errors.message.message}</span>
          )}
        </div>
        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </>
  );
};

export default HomePageContactForm;
