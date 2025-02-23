"use client";

import Image from "next/image";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

// import sponsors7 from "../../../public/assets/img/solar-brands/6.webp";
import { brandsType } from "@/interFace/interFace";

interface propType {
  brands: brandsType[];
}

const Sponsors = ({ brands }: propType) => {
  return (
    <div className="container sponsors-section">
      <h2>
        Powering Your Future with the{" "}
        <strong style={{ color: "#FFA500" }}>Best Solar Brands</strong>
      </h2>
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
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Extra small screens
          480: { slidesPerView: 2, spaceBetween: 15 }, // Small devices
          768: { slidesPerView: 4, spaceBetween: 15 }, // Tablets
          1024: { slidesPerView: 5, spaceBetween: 20 }, // Large devices
        }}
      >
        {brands?.concat(brands).map((sponsor, index) => (
          <SwiperSlide key={index}>
            <Image
              id={sponsor?.id.toString()}
              src={sponsor?.img}
              alt={sponsor?.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsors;
