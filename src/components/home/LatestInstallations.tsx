"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import projectOne from "../../../public/assets/img/residential-1.jpeg";
import projectTwo from "../../../public/assets/img/solar-panels.jpg";
import projectThree from "../../../public/assets/img/battery-1.jpeg";
import projectFour from "../../../public/assets/img/installation-2.jpeg";
import projectFive from "../../../public/assets/img/cleaning-1.jpg";
import Image from "next/image";
import EvenoddIcon from "@/svg/EvenoddIcon";
import Link from "next/link";

interface propsType {
  classOne: string;
  noBottom: string;
}

const LatestInstallations = ({ classOne, noBottom }: propsType) => {
  const sliderData = [
    {
      id: 1,
      img: projectOne,
      title: "Explore our Residential Package",
      kwp: "6.6kW - 19.36kW",
      icon: <EvenoddIcon />,
    },
    {
      id: 2,
      img: projectTwo,
      title: "Explore Our Commercial Package",
      kwp: "20kW - 100kW",
      icon: <EvenoddIcon />,
    },
    {
      id: 4,
      img: projectFour,
      title: "Solar Panel Installation",
      kwp: "Solar Panel Installation",
      icon: <EvenoddIcon />,
    },
    {
      id: 3,
      img: projectThree,
      kwp: "Looking for Solar Battery?",
      title: "Solar Battery",
      icon: <EvenoddIcon />,
    },
    {
      id: 5,
      img: projectFive,
      kwp: "Solar Panel Cleaning",
      title: "Solar Panel Cleaning",
      icon: <EvenoddIcon />,
    },
  ];

  return (
    <section className={`recent-projects gap ${classOne} ${noBottom}`}>
      <div className="container">
        <div className="heading">
          <p>Our Packages</p>
          <div className="line"></div>
          <h2>Provide Solar Solution</h2>
        </div>
        <div className="row">
          <div className="new-project swiper-carousel swiper-theme">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              loop={true}
              slidesPerView={2}
              // autoplay={{ delay: 3000 }}

              pagination={{
                el: ".swiper-slider-dots-three",
                clickable: true,
              }}
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
                  slidesPerView: 2,
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
                  <div className="item">
                    <div className="recent-projects-img">
                      <figure>
                        <Image
                          alt="our-packages"
                          src={item?.img}
                          style={{ width: "670px", height: "427px" }}
                        />
                      </figure>
                      <div className="recent-projects-text">
                        <Link
                          href={
                            item.id === 1
                              ? "/packages/residential-solar"
                              : item.id === 2
                              ? "/packages/commercial-solar"
                              : item.id === 4
                              ? "/services-details/1"
                              : item.id === 5
                              ? "/services-details/2"
                              : item.id === 4
                              ? "/services-details/4"
                              : "/services"
                          }
                        >
                          <h5>{item?.title}</h5>
                        </Link>
                        <h6>{item?.kwp}</h6>
                        {item?.kwp && <span>KWP SYSTEM</span>}
                        <Link
                          href={
                            item.id === 1
                              ? "/packages/residential-solar"
                              : item.id === 2
                              ? "/packages/commercial-solar"
                              : item.id === 4
                              ? "/services-details/1"
                              : item.id === 5
                              ? "/services-details/2"
                              : item.id === 4
                              ? "/services-details/4"
                              : "/services"
                          }
                        >
                          <i>{item?.icon}</i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-slider-dots-three"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInstallations;
