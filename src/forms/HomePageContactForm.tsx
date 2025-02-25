"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const HomePageContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Sending Info..");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY,
          fullName: getValues("fullName"),
          email: getValues("email"),
          phone: getValues("phone"),
          address: getValues("address"),
          message: getValues("message"),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your Interest, We will reach out to you Soon", {
          id: toastId,
          duration: 1500,
        });
      }
    } catch (error) {
      toast.error("Oops! Something Went Wrong while sending Info", {
        id: toastId,
      });
    } finally {
      toast.dismiss(toastId);
    }

    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="request-quote-form">
        <div className="quote-form-div">
          <input
            type="text"
            placeholder="Full Name"
            required
            {...register("fullName", {
              required: "Full Name is required",
            })}
          />
          {errors.fullName && (
            <span className="error-message">{errors.fullName.message}</span>
          )}
        </div>
        <div className="quote-form-div">
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            required
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
            required
            placeholder="Phone No"
          />
          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </div>
        <div className="quote-form-div">
          <input
            type="text"
            {...register("address", {
              required: "Address is required",
            })}
            placeholder="Address"
          />
          {errors.address && (
            <span className="error-message">{errors.address.message}</span>
          )}
        </div>
        <div className="quote-form-div">
          <textarea
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
            })}
            required
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
