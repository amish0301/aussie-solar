"use client";
import React from "react";
import Image from "next/image";
import "./GalleryArea.css";

// Import images
import imgOne from "./img/1.jpeg";
import imgTwo from "./img/2.jpeg";
import imgThree from "./img/3.jpeg";
import imgFour from "./img/4.jpeg";
import imgFive from "./img/5.jpeg";
import imgSix from "./img/6.jpeg";
import imgSeven from "./img/7.jpeg";
import imgEight from "./img/8.jpeg";
import imgNine from "./img/9.jpeg";
import imgTen from "./img/10.jpeg";
import imgEleven from "./img/11.jpeg";

// Store imported images in an array
const images = [
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  imgSeven,
  imgEight,
  imgNine,
  imgTen,
  imgEleven,
];

const GalleryArea = () => {
  return (
    <section className="gap section-contact">
      <div className="container">
        <div className="heading">
          <p>Gallery</p>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="masonry-container">
              {images.map((image, index) => (
                <div className="panel" key={index}>
                  <div className="panel-wrapper">
                    <Image
                      className="panel-img"
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryArea;
