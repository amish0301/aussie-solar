"use client";

import { serviceData } from "@/data/form-data";
import NiceSelect from "@/elements/NiceSelect";
import { FormData, NiceSelectType } from "@/interFace/interFace";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function QuotePopup() {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 4000);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Prevents scrolling in <html>
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

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
          Country_Code: getValues("countryCode"),
          Postal_Code: getValues("postalCode"),
          Service_Interest: getValues("serviceInterest"),
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
    reset();
    setIsVisible(false);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "popup-overlay") {
      setIsVisible(false);
    }
  };

  const selectHandler = (
    item: NiceSelectType | NiceSelectType[],
    name: keyof FormData
  ) => {
    // if Its Service Selected value -> its an array then don't update
    if (Array.isArray(item)) {
      setValue(name, item.map((service) => service.option).join(", "));
      return;
    }
    setValue(name, item.option);
  };

  return (
    isVisible && (
      <motion.div
        id="popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-transparent bg-opacity-50 z-3"
        style={{ zIndex: 1050 }}
        onClick={handleOutsideClick}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 rounded shadow-lg position-relative"
          style={{
            maxWidth: "460px",
            width: "90%",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Ribbon */}
          <div
            className="position-absolute text-white fw-bold"
            style={{
              background: "red",
              color: "white",
              padding: "8px 30px",
              top: "18px",
              right: "-25px",
              transform: "rotate(45deg)",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              fontSize: "0.875rem",
              zIndex: 2,
            }}
          >
            20% OFF *
          </div>

          <button
            className="btn-close position-absolute"
            style={{ top: 2, right: 0, zIndex: 3 }}
            onClick={() => setIsVisible(false)}
          ></button>
          <h2 className="text-left text-[##000000]">
            Hold On! <br /> Confused About Going Solar?
          </h2>
          <p className="text-center text-muted">
            Slash your electricity bills with our top-rated solar solutions! Act
            now - this <strong>exclusive offer</strong> won&apos;t last long! ⏳
          </p>
          <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Full Name"
                className="form-control p-2"
                required
                {...register("fullName", {
                  required: "Full Name is required",
                })}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName.message}</span>
              )}
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control p-2"
                required
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            {/* postal code */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Postal Code"
                className="form-control p-2"
                required
                {...register("postalCode", {
                  required: "Postal Code is required",
                })}
              />
              {errors.postalCode && (
                <span className="error-message">
                  {errors.postalCode.message}
                </span>
              )}
            </div>

            <div className="mb-3 d-flex">
              <select
                className="form-select w-auto me-2"
                {...register("countryCode", {
                  required: "Country code is required",
                })}
              >
                <option value="+61">🇦🇺 +61</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+971">🇦🇪 +971</option>
                {/* Add more country codes as needed */}
              </select>

              <input
                type="tel"
                placeholder="Your Mobile Number"
                className="form-control p-2"
                required
                {...register("phone", {
                  required: "Mobile Number is required",
                })}
              />
            </div>
            {errors.phone && (
              <span className="error-message">{errors.phone.message}</span>
            )}

            {/* services  */}
            <div className="w-100">
              <NiceSelect
                options={serviceData}
                defaultCurrent={0}
                onChange={selectHandler}
                isService={true}
                isPopUpForm={true}
                name="serviceInterest"
                className="form-control p-2"
              />
            </div>

            <button
              type="submit"
              className="btn text-white w-100 p-2 mt-4 fw-bold"
              style={{ backgroundColor: "#fe5716" }}
            >
              Get My Exclusive Solar Savings Quote Now!
            </button>
          </form>
          <p
            className="text-center mt-3 text-muted"
            style={{ fontSize: "0.875rem" }}
          >
            By submitting, you agree to our{" "}
            <a href="#" className="text-primary">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    )
  );
}
