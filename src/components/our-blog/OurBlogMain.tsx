import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import BlogContentWrapper from "./BlogContentWrapper";

const OurBlogMain = () => {
  return (
    <>
      <BreadCamb title="Our Blog" bannerTagLine="Explore Our Blogs." />
      <BlogContentWrapper />
    </>
  );
};

export default OurBlogMain;
