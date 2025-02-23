import React from "react";
import bgImgOptional from "../../../public/assets/img/banners/solar-panel-services.jpg";
import { StaticImageData } from "next/image";
interface propsType {
  title: string;
  bannerTagLine?: string;
  bgImg?: StaticImageData;
}

const BreadCamb = ({ title, bgImg, bannerTagLine }: propsType) => {
  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: bgImg ? `url(${bgImg.src})` : `url(${bgImgOptional.src})` }}
      >
        <div className="container">
          <div className="banner-text">
            <h2>{title}</h2>
            <p>
             {bannerTagLine ?? 'Comprehensive Solar Solutions for Every Need - From Installation to Monitoring, We Power Your Future with Excellence.'}
            </p>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">
                  <i className="fa-solid fa-house pe-2"></i>Home
                </a>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCamb;
