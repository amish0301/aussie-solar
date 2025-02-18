"use client";
import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import QuoteIcon from "@/svg/QuoteIcon";
import { TtestimonialType } from "@/interFace/interFace";
import { testimonialData } from "@/data/testimonial-data";

interface propsType {
  propsClass: string;
}

const TestimonialsSec = ({ propsClass }: propsType) => {
  const [currentData, setcurrentData] = useState<TtestimonialType | null>(null);
  const [currentActive, setcurrentActive] = useState(0);

  const handleCurrentData = (id: number) => {
    setcurrentActive(id);
    const data = testimonialData.find((item) => item.id == id);
    setcurrentData(data as TtestimonialType);
  };

  return (
    <>
      <section className={`gap circle-slider ${propsClass}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="nav-c-slider">
                {testimonialData?.slice(0, 5)?.map((item) => (
                  <button
                    onClick={() => handleCurrentData(item.id)}
                    key={item.id}
                    className={`next-slide b-none ${
                      item.id === currentActive ||
                      (currentActive === 0 && item.id === 1)
                        ? "nav-active"
                        : ""
                    }`}
                    type="button"
                  >
                    <Image
                      className="animate__animated animate__fadeIn"
                      src={item.img}
                      alt={`img ${item.id}`}
                      style={{ objectFit: "contain" }}
                    />
                  </button>
                ))}

                <div className="slider-main-img">
                  <Image
                    src={
                      currentActive === 0
                        ? testimonialData[0].img
                        : (currentData?.img as StaticImageData)
                    }
                    alt="img 1"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="heading">
                <p>Industry-Recognized Certifications</p>
                <div className="line"></div>
                <h2>About Certification</h2>
              </div>

              <div className="c-slider">
                {currentActive === 0 ? (
                  <>
                    <div>
                      <div className="client-reviews-text">
                        <h3>{testimonialData[0].review}</h3>
                        <div className="d-flex align-items-center">
                          <i>
                            <QuoteIcon />
                          </i>
                          <div>
                            <h4>{testimonialData[0].name}</h4>
                            <span>{testimonialData[0].title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="client-reviews-text">
                        <h3>{currentData?.review}</h3>
                        <div className="d-flex align-items-center">
                          <i>
                            <QuoteIcon />
                          </i>
                          <div>
                            <h4>{currentData?.name}</h4>
                            <span>{currentData?.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSec;
