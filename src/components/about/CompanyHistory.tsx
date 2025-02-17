"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
const CompanyHistory = () => {
  const sliderData = [
    {
      id: 1,
      year: 2001,
      title: "First office set up by Stephen Barrett",
      details:
        "leading renewable energy solutions provider that is revolutionising and redefining the way sustainable",
    },
    {
      id: 2,
      year: 2008,
      title: "Larger premises secured in Long Ashton",
      details:
        "leading renewable energy solutions provider that is revolutionising and redefining the way sustainable",
    },
    {
      id: 3,
      year: 2014,
      title: "Government renewable energy incentive",
      details:
        "leading renewable energy solutions provider that is revolutionising and redefining the way sustainable",
    },
    {
      id: 4,
      year: 2018,
      title: "‘Company of the Year’ at the British",
      details:
        "leading renewable energy solutions provider that is revolutionising and redefining the way sustainable",
    },
    {
      id: 5,
      year: 2020,
      title: "First office set up by Stephen Barrett",
      details:
        "leading renewable energy solutions provider that is revolutionising and redefining the way sustainable",
    },
  ];
  return (
    <>
      <section>
        <div className="container">
          <div className="heading">
            <p>story of Solar Energy</p>
            <div className="line"></div>
            <h2>Company History</h2>
          </div>
          <div className="row history-slider owl-carousel owl-theme">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              loop={true}
              slidesPerView={4}
              autoplay={{ delay: 3000 }}
              navigation={{
                nextEl: ".slide-next",
                prevEl: ".slide-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },

                576: {
                  slidesPerView: 1,
                },

                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              {sliderData?.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="col-lg-12 item">
                    <div className="history">
                      <h2>{item?.year}</h2>
                      <h4>{item?.title}</h4>
                      <p>{item?.details}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="slider-nav en-owl-btn-two">
              <button type="button" role="presentation" className="slide-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button type="button" role="presentation" className="slide-next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyHistory;
