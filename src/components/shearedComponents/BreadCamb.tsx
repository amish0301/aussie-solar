import React from "react";
import bgImgOptional from "../../../public/assets/img/banners/solar-panel-services.jpg";
import { StaticImageData } from "next/image";
interface propsType {
  title: string;
  bgImg?: StaticImageData;
}

const BreadCamb = ({ title, bgImg }: propsType) => {
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
              Practical renewable energy technology thatreduces costs and helps
              the environment
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
