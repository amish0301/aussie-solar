import Image from "next/image";
import React from "react";
import thumbImg from "../../../public/assets/img/package-thumb.jpeg"
const Thumbnail = () => {
  return (
    <>
      <div className="container mt-60">
        <div className="video">
          <figure>
            <Image alt="img" className="w-100" src={thumbImg} style={{ width: "100%", height: "auto" }}/>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
