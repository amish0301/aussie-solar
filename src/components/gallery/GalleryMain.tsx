import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import GalleryArea from "./GalleryArea";
import bgImg from '../../../public/assets/img/banners/gallery-bg.jpeg'

const GalleryMain = () => {
  return (
    <>
      <BreadCamb title="Gallery" bgImg={bgImg} />
      <GalleryArea />
    </>
  );
};

export default GalleryMain;
