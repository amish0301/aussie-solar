"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import sliderImg1 from "../../../public/assets/img/featured-area.jpg";
import sliderImg2 from "../../../public/assets/img/featured-area-2.jpg";
import sliderImg3 from "../../../public/assets/img/featured-area-3.jpg";
import sliderImg4 from "../../../public/assets/img/featured-area-4.jpg";
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
      title: "installation and maintenance of solar panels",
      subTitle:
        "Practical renewable energy technology thatreduces costs and helps the environment",
    },
    {
      id: 2,
      bgImg: sliderImg2,
      title: "energize society using sustainable & reliable",
      subTitle:
        "Practical renewable energy technology thatreduces costs and helps the environment",
    },
    {
      id: 3,
      bgImg: sliderImg3,
      title: "shapehero img Renewable Energy Solutions Deliver",
      subTitle:
        "Practical renewable energy technology thatreduces costs and helps the environment",
    },
    {
      id: 4,
      bgImg: sliderImg4,
      title: "leading supplier of sloar materials for contractors",
      subTitle:
        "Practical renewable energy technology thatreduces costs and helps the environment",
    },
  ];

  return (
    <>
      <section className="slider-hero">
        <div className="slider-home-1 swiper-carousel swiper-theme">
          <Swiper
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: ".slide-next",
              prevEl: ".slide-prev",
            }}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {sliderData?.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  {index === activeIndex && (
                    <div
                      className="item hero-section"
                      style={{ backgroundImage: `url(${item?.bgImg?.src})` }}
                    >
                      <div className="container">
                        <div className="row">
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
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })} 
          </Swiper>
          {/* arrow  */}
          <div className="slider-nav en-owl-btn disabled">
            <button type="button" role="presentation" className="slide-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" role="presentation" className="slide-next">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="swiper-slider-dots disabled"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
