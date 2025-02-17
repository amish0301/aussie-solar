"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import projectOne from "../../../public/assets/img/recent-projects-1.jpg";
import projectTwo from "../../../public/assets/img/recent-projects-2.jpg";
import projectThree from "../../../public/assets/img/recent-projects-3.jpg";
import projectFour from "../../../public/assets/img/recent-projects-4.jpg";
import projectFive from "../../../public/assets/img/recent-projects-5.jpg";
import projectSix from "../../../public/assets/img/recent-projects-6.jpg";
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
      title: "Develops and Manages Sustainable Infrastructure",
      kwp: "250.43",
      icon: <EvenoddIcon />,
    },
    {
      id: 2,
      img: projectTwo,
      title: "Bishop rawstorne academy – leyland (bauder mounting)",
      kwp: "250.43",
      icon: <EvenoddIcon />,
    },
    {
      id: 3,
      img: projectThree,
      kwp: "250.43",
      title: "Develops and Manages Sustainable Infrastructure",
      icon: <EvenoddIcon />,
    },
    {
      id: 4,
      img: projectFour,
      title: "Bishop rawstorne academy – leyland (bauder mounting)",
      kwp: "250.43",
      icon: <EvenoddIcon />,
    },
    {
      id: 5,
      img: projectFive,
      title: "Develops and Manages Sustainable Infrastructure",
      kwp: "250.43",
      icon: <EvenoddIcon />,
    },
    {
      id: 6,
      img: projectSix,
      title: "Develops and Manages Sustainable Infrastructure",
      kwp: "250.43",
      icon: <EvenoddIcon />,
    },
  ];

  return (
    <section className={`recent-projects gap ${classOne} ${noBottom}`}>
      <div className="container">
        <div className="heading">
          <p>Recent Projects</p>
          <div className="line"></div>
          <h2>Latest Installations</h2>
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
                        <Image alt="recent-projects" src={item?.img} />
                      </figure>
                      <div className="recent-projects-text">
                        <Link href="/our-projects">
                          <h5>{item?.title}</h5>
                        </Link>
                        <h6>{item?.kwp}</h6>
                        <span>KWP SYSTEM</span>
                        <Link href="/our-projects">
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
