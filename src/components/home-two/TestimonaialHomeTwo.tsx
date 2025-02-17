"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { TtestimonialType } from "@/interFace/interFace";
import { testimonialData } from "@/data/testimonial-data";
import QuoteIcon from "@/svg/QuoteIcon";

const TestimonaialHomeTwo = () => {
  const [currentData, setcurrentData] = useState<TtestimonialType | null>(null);
  const [currentActive, setcurrentActive] = useState(0);

  const handleCurrentData = (id: number) => {
    setcurrentActive(id);
    const data = testimonialData.find((item) => item.id == id);
    setcurrentData(data as TtestimonialType);
  };

  return (
    <>
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-for">
                {currentActive === 0 ? (
                  <>
                    <div className="slider-for__item">
                      <div className="client-reviews-text two">
                        <i><QuoteIcon /></i>
                        <h5>{testimonialData[5].review}</h5>
                        <h4>{testimonialData[5].name}</h4>
                        <span>{testimonialData[5].title}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="slider-for__item">
                      <div className="client-reviews-text two">
                        <i>
                          <QuoteIcon />
                        </i>
                        <h5>{currentData?.review}</h5>
                        <h4>{currentData?.name}</h4>
                        <span>{currentData?.title}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="container d-flex justify-content-center">
                <div className="en-testimonial-nav">
                  <Swiper
                    modules={[
                      Autoplay,
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                    ]}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      481: {
                        slidesPerView: 1,
                        
                      },
                      576: {
                        slidesPerView: 3,
                         spaceBetween: 1,
                      },
                      668: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      992: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                      },
                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                      },
                      1400: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    {testimonialData?.slice(5, 10)?.map((item) => (
                      <SwiperSlide key={item?.id}>
                        <div
                          onClick={() => handleCurrentData(item.id)}
                          className={`en-testimonial-img-wrapper ${
                            item.id === currentActive ||
                            (currentActive === 0 && item.id === 6)
                              ? "active"
                              : ""
                          }`}
                        >
                          <Image alt="img" src={item?.img} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonaialHomeTwo;
