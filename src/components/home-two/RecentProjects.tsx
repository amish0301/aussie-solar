"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import checkMark from "../../../public/assets/img/check-mark.png";
import project1 from "../../../public/assets/img/recent-projects-one.jpg";
import project2 from "../../../public/assets/img/recent-projects-two.jpg";
import project3 from "../../../public/assets/img/recent-projects-three.jpg";
import Image from "next/image";
const RecentProjects = () => {
  const sliderData = [
    {
      id: 1,
      title: "SOLAR ENERGY",
      subTitle: "Floating Sun Tracker Solar Panel",
      price: "21,00",
      img: project1,
    },
    {
      id: 2,
      title: "SOLAR ENERGY",
      subTitle: "Floating Sun Tracker Solar Panel",
      price: "21,00",
      img: project2,
    },
    {
      id: 3,
      title: "SOLAR ENERGY",
      subTitle: "Floating Sun Tracker Solar Panel",
      price: "21,00",
      img: project3,
    },
    {
      id: 4,
      title: "SOLAR ENERGY",
      subTitle: "Floating Sun Tracker Solar Panel",
      price: "21,00",
      img: project1,
    },
    {
      id: 5,
      title: "SOLAR ENERGY",
      subTitle: "Floating Sun Tracker Solar Panel",
      price: "21,00",
      img: project2,
    },
    {
      id: 6,
      title: "SOLAR ENERGY",
      subTitle: "Floating Sun Tracker Solar Panel",
      price: "21,00",
      img: project3,
    },
  ];
  return ( 
    <>
      <section className="gap">
        <div className="container">
          <div className="heading">
            <p>recent projects</p>
            <div className="line"></div>
            <h2>Recent Projects</h2>
          </div> 
          <div className="row">
            <div className="col-lg-12">
              <div className="recent-projects-two swiper-carousel">
                <Swiper 
                  modules={[Autoplay, Navigation, Scrollbar, A11y]}
                  loop={true}
                  slidesPerView={2} 
                  navigation={{
                    nextEl: ".slide-next",
                    prevEl: ".slide-prev",
                  }}
                  // autoplay={{ delay: 3000 }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    481: {
                      slidesPerView: 1,
                     
                    },
                    576: {
                      slidesPerView: 1,
                      
                    },
                    668: {
                      slidesPerView: 1,
                       
                    },
                    768: {
                      slidesPerView: 1,
                     
                    },
                    992: {
                      slidesPerView: 1,
               
                    },
                    1200: {
                      slidesPerView: 2,
                     
                    },
                    1400: {
                      slidesPerView: 2,
                       
                    },
                  }}
                >
                  {sliderData?.map((item, index) => (
                    <SwiperSlide key={item.id}>
                      <div className="team-data">
                        <div className="team-info">
                          <span> {item?.title} </span>
                          <h4> {item?.subTitle} </h4>
                          <ul>
                            <li>
                              <Image alt="check-mark" src={checkMark} />
                              Reduce electricity costs
                            </li>
                            <li>
                              <Image alt="check-mark" src={checkMark} />
                              Increase profits
                            </li>
                            <li>
                              <Image alt="check-mark" src={checkMark} />
                              Generate independence
                            </li>
                          </ul>
                          <h5>
                            <span>$</span>
                            {item?.price}
                          </h5>
                          <h6>YEAR SAVINGS</h6>
                        </div>
                        <div className="team-image">
                          <figure>
                            <Image src={item?.img} alt="team-3"/>
                          </figure>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider-nav en-owl-btn-two">
                  <button
                    type="button"
                    role="presentation"
                    className="slide-prev"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="slide-next"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
