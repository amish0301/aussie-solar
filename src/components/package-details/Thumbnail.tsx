import Image, { StaticImageData } from "next/image";
import React from "react";
import thumbImg from "../../../public/assets/img/package-thumb.jpeg";
import residentialThumb from "../../../public/assets/residential_gif.gif";

interface propType {
  isResidentialPackage: boolean;
}

const Thumbnail = ({ isResidentialPackage }: propType) => {
  return (
    <>
      <div className="container mt-60">
        <div className="video">
          <figure>
            <Image
              alt="img"
              className="w-100"
              src={isResidentialPackage ? residentialThumb : thumbImg}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
