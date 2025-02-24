"use client";
import React, { useState } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import bgImg from "../../../public/assets/img/featured-area-background.jpg";
import sliderImg1 from "../../../public/assets/img/slide-two-1.jpg";
import sliderImg2 from "../../../public/assets/img/slide-two-2.jpg";
import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/use-context";
const HeroSlider = () => {
  const { openLetterBox, setOpenLetterBox } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };
  const sliderData = [
    {
      id: 1,
      bgImg: sliderImg1,
      title: "Energize Society Reliable Energy",
      subTitle:
        "Practical renewable energy technology that reduces costs and helps the environment",
    },
    {
      id: 2,
      bgImg: sliderImg2,
      title: "Energize Society Reliable Energy",
      subTitle:
        "Practical renewable energy technology that reduces costs and helps the environment",
    },
  ];
  return (
    <>
      <section
        className="featured-area-two"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row two-slider swiper-carousel swiper-theme">
            <Swiper
              modules={[Autoplay, Pagination]} 
              onSlideChange={handleSlideChange}
              pagination={{
                el: ".swiper-slider-dots",
                clickable: true,
              }}
              // autoplay={{
              //   delay: 3000,
              // }}
              // loop={true}
            >
              {sliderData?.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    {index === activeIndex && (
                      <div className="col-lg-12 item">
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <div className="featured-area-one">
                              <h2>{item?.title}</h2>
                              <h6>{item?.subTitle}</h6>
                              <button
                                type="button"
                                onClick={() => setOpenLetterBox(!openLetterBox)}
                                className="button newsbox"
                              >
                                Request a Quote
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="slide-two-img">
                              <Image alt="img" src={item?.bgImg} style={{ width: "100%", height: "100%" }}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-slider-dots"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
