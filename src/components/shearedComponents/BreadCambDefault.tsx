import { BreadCrumbDefaultPropType } from "@/interFace/interFace";
import React from "react";

const BreadCambDefault = ({
  title,
  pages,
  bgImg,
}: BreadCrumbDefaultPropType) => {
  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: bgImg ? `url(${bgImg.src})` : "none" }}
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
              <li><a href="/"><i className="fa-solid fa-cube pe-2"></i>{pages}</a></li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCambDefault;
