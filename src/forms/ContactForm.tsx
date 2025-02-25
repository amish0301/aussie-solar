"use client";
import { hearOptions, serviceData } from "@/data/form-data";
import NiceSelect from "@/elements/NiceSelect";
import { FormData, NiceSelectType } from "@/interFace/interFace";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactForm = () => {
  const [otherSource, setOtherSource] = useState<string>("");
  const [isHearAboutUsOther, setIsHearAboutUsOther] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const selectHandler = (
    item: NiceSelectType | NiceSelectType[],
    name: keyof FormData
  ) => {
    // if Its Service Selected value -> its an array then don't update
    if (Array.isArray(item)) {
      setValue(
        name,
        item.map((service) => service.option)
      );
      return;
    }
    setValue(name, item.option);
    if (name === "hearAboutUs") {
      setIsHearAboutUsOther(!isHearAboutUsOther);
      if (item.option !== "Other") {
        setOtherSource("");
      }
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Sending Info...");

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
          postalCode: getValues("postalCode"),
          location: getValues("location"),
          Hear_About_Us_Through: getValues("hearAboutUs"),
          Interested_Services: JSON.stringify(getValues("serviceInterest")),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          "Thank you for your Interest, We will reach out to you Soon",
          {
            id: toastId,
            duration: 1500,
          }
        );
      }
    } catch (error) {
      toast.error("Oops! Something Went Wrong while sending Info", {
        id: toastId,
      });
    } finally {
      toast.dismiss(toastId);
    }

    toast.success(
      "Thank you for your Interest, Our Team will reach out to you Soon",
      { id: toastId, duration: 30000 }
    );

    // form RESET
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
                <span className="error-message">{errors.fullName.message}</span>
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
                {...register("postalCode", {
                  required: "Postal Code is required",
                })}
                placeholder="Postal Code"
              />
              {errors.postalCode && (
                <span className="error-message">
                  {errors.postalCode.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-div ">
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
          </div>
          <div className="col-lg-12">
            <div className="contact-form-div ">
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                placeholder="Location"
              />
              {errors.location && (
                <span className="error-message">{errors.location.message}</span>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-div ">
              <NiceSelect
                options={hearOptions}
                defaultCurrent={0}
                onChange={selectHandler}
                name={"hearAboutUs" as keyof FormData}
                className="nice-select Advice"
              />
            </div>
          </div>

          {/* rendering other field input */}
          {isHearAboutUsOther && (
            <div className="col-lg-12">
              <div className="contact-form-div">
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherSource}
                  onChange={(e) => setOtherSource(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          <label>I am interested in renewables for my</label>
          <div className="col-lg-12">
            <NiceSelect
              options={serviceData}
              defaultCurrent={0}
              onChange={selectHandler}
              isService={true}
              name="serviceInterest"
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
