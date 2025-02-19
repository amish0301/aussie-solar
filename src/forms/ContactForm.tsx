"use client";
import NiceSelect from "@/elements/NiceSelect";
import { NiceSelcetType } from "@/interFace/interFace";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  postCode: string;
  location: string;
  howToKnow: string;
}

const ContactForm = () => {
  const serviceData: NiceSelcetType[] = [
    {
      id: 1,
      option: "Choose Service",
    },
    {
      id: 2,
      option: "Select Topic 1",
    },
    {
      id: 3,
      option: "Select Topic 2",
    },
    {
      id: 4,
      option: "Select Topic 3",
    },
    {
      id: 5,
      option: "Select Topic 4",
    },
  ];
  const selectHandler = () => {};

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
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <label>GENERAL ENQUIRY</label>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form-div">
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName", {
                  required: "Full Name is required",
                })}
                required
              />
              {errors.fullName && (
                <span className="error-message">
                  {errors.fullName.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form-div">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Email Address"
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form-div ">
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
          </div>
          <div className="col-md-6">
            <div className="contact-form-div">
              <input
                type="text"
                {...register("postCode", {
                  required: "Post Code is required",
                })}
                placeholder="Post Code"
              />
              {errors.postCode && (
                <span className="error-message">{errors.postCode.message}</span>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-div ">
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                placeholder="Location?"
              />
              {errors.location && (
                <span className="error-message">{errors.location.message}</span>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-div ">
              <input
                type="text"
                {...register("howToKnow", {})}
                placeholder="How did you hear of us?"
              />
              {errors.howToKnow && (
                <span className="error-message">
                  {errors.howToKnow.message}
                </span>
              )}
            </div>
          </div>
          <label>I am interested in renewables for my</label>
          <div className="col-lg-12">
            <NiceSelect
              options={serviceData}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              className="nice-select Advice"
            />
          </div>
          <div className="col-lg-12">
            <div className="contact-form-div contact-form-message-div">
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
              />
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-start mt-4 mb-4">
            <button className="button"> Send Message </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
