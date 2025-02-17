"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import sponsors1 from "../../../public/assets/img/solar-brands/sungrow.png";
import sponsors2 from "../../../public/assets/img/solar-brands/goodwe.png";
import sponsors3 from "../../../public/assets/img/solar-brands/solax.webp";
import sponsors4 from "../../../public/assets/img/solar-brands/byd.webp";
import sponsors5 from "../../../public/assets/img/solar-brands/5.png";
import sponsors6 from "../../../public/assets/img/solar-brands/3.png";
import sponsors7 from "../../../public/assets/img/solar-brands/6.webp";
import sponsors8 from "../../../public/assets/img/solar-brands/solax.webp";

const Sponsors = () => {
  const sponsors = [
    sponsors1,
    sponsors2,
    sponsors3,
    sponsors4,
    sponsors5,
    sponsors6,
    sponsors7,
    sponsors8,
  ];

  return (
    <div className="container sponsors-section mt-4">
      <h2>Brands We Offer</h2>
      <div className="heading d-flex justify-content-center">
        <div className="line "></div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        modules={[Autoplay]}
      >
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <SwiperSlide key={index}>
            <Image src={sponsor} alt="Sponsor" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsors;
