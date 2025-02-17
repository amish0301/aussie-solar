"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import EmailIconTwo from "@/svg/EmailIconTwo";
import experts1 from "../../../public/assets/img/our-experts-1.jpg";
import experts2 from "../../../public/assets/img/our-experts-2.jpg";
// sponsers img data

import sponsor1 from "../../../public/assets/img/sponsor-1.jpg";
import sponsor2 from "../../../public/assets/img/sponsor-2.jpg";
import sponsor3 from "../../../public/assets/img/sponsor-3.jpg";
import sponsor4 from "../../../public/assets/img/sponsor-4.jpg";
import sponsor5 from "../../../public/assets/img/sponsor-5.jpg";
import sponsor6 from "../../../public/assets/img/sponsor-6.jpg";
import sponsor7 from "../../../public/assets/img/sponsor-7.jpg";
import sponsor8 from "../../../public/assets/img/sponsor-8.jpg";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface propsType {
  bgImg: StaticImageData | null;
}

const CreativeTeam = ({ bgImg }: propsType) => {
  const pathName = usePathname();
  const sliderData = [
    {
      id: 1,
      title: "Thomas Walkar",
      subTitle: "engineer solutions",
      img: experts1,
    },
    {
      id: 2,
      title: "Willimes Jassi",
      subTitle: "engineer solutions",
      img: experts2,
    },
    {
      id: 3,
      title: "Thomas Walkar",
      subTitle: "engineer solutions",
      img: experts1,
    },
    {
      id: 4,
      title: "Thomas Walkar",
      subTitle: "engineer solutions",
      img: experts2,
    },
  ];

  const sponsorData = [
    {
      img: sponsor1,
    },
    {
      img: sponsor2,
    },
    {
      img: sponsor3,
    },
    {
      img: sponsor4,
    },
    {
      img: sponsor5,
    },
    {
      img: sponsor6,
    },
    {
      img: sponsor7,
    },
    {
      img: sponsor8,
    },
  ];
  return (
    <>
      <section
        className="our-experts gap"
        style={{ backgroundImage: `url(${bgImg ? bgImg.src : ""})` }}
      >
        <div className="container">
          <div className="heading">
            <p>OUR CREATIVE TEAM</p>
            <div className="line"></div>
            <h2>Meet Our Experts</h2>
          </div>
          <div className="row experts-slider swiper-carousel owl-theme">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              loop={true}
              slidesPerView={2}
              //   autoplay={{ delay: 3000 }} 
              pagination={{
                el: ".swiper-slider-dots-two",
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
                  <div className="col-lg-12 item">
                    <div className="our-experts-text">
                      <div className="our-experts-img">
                        <Image alt="img" src={item?.img}/>
                      </div>
                      <div>
                        <h3>{item?.title}</h3>
                        <span>{item?.subTitle}</span>
                        <div className="d-flex mail-to">
                          <i>
                            <EmailIconTwo />
                          </i>
                          <Link className="our-experts-email" href="mailto:info@example.com">
                            info@example.com
                          </Link>
                        </div>
                        <p>
                          <Link href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook"></i>facebook
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-slider-dots-two"></div>
          </div>
        </div>

        {pathName === "/home-two" && (
          <div className="container partners gap no-bottom">
            <h3>partners and sponsors</h3>
            <div className="sponsors two">
              {sponsorData?.slice(0, 4)?.map((item, index) => (
                <Image key={index} alt="sponsors" src={item?.img} />
              ))}
            </div>
            <div className="sponsors three">
              {sponsorData?.slice(0, 4)?.map((item, index) => (
                <Image key={index} alt="sponsors" src={item?.img} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CreativeTeam;
