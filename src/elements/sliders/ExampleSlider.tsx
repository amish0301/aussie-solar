"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
const ExampleSlider = () => {
  const brandLogos = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  return (
    <>
      <div>
        <div className="container position-relative">
          <div className="row brand-active slick-initialized slick-slider">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 6,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: ".slick-next",
                prevEl: ".slick-prev",
              }}
            >
              {brandLogos?.map((item, num) => {
                return (
                  <SwiperSlide key={num}>
                    
                    {/* <div className="col-xl-12">
                       here will be all content
                    </div> */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button type="button" className="slick-prev slick-arrow">
              <i className="far fa-angle-left"></i>
            </button>
            <button type="button" className="slick-next slick-arrow">
              <i className="far fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleSlider;
