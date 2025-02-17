"use client"
import React, { useState } from "react";

import TimeSaveIcon from "@/svg/TimeSaveIcon";
import SaveMoneyIcon from "@/svg/SaveMoneyIcon";
import ObligationIcon from "@/svg/ObligationIcon";
import videoIcon from "../../../public/assets/img/video.jpg";
import Image, { StaticImageData } from "next/image";
import ModalVideo from "react-modal-video";
import Link from "next/link";
interface propsType{
  bgImg:StaticImageData | null;
  propsClass:string;
}
const WhyUseEnergix = ({bgImg,propsClass}:propsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section
        className={`energix gap ${propsClass}`}
        style={{ backgroundImage: `url(${bgImg ? bgImg.src : ''})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="heading">
                <p>Worldwithout Waste</p>
                <div className="line"></div>
                <h2>Why Use Kangaroo Solars?</h2>
              </div>
              <div className="use-energix d-flex">
                <div className="use-energix-icon">
                  <i>
                    <TimeSaveIcon />
                  </i>
                </div>
                <div>
                  <h4>Save Time</h4>
                  <h6>
                    Get up to 3 quotes from our selected suppliers by filling in
                    only 1 form
                  </h6>
                </div>
              </div>
              <div className="use-energix d-flex">
                <div className="use-energix-icon">
                  <i>
                    <SaveMoneyIcon />
                  </i>
                </div>
                <div>
                  <h4>Save Money</h4>
                  <h6>
                    Get up to 3 quotes from our selected suppliers by filling in
                    only 1 form
                  </h6>
                </div>
              </div>
              <div className="use-energix mb-0 d-flex">
                <div className="use-energix-icon">
                  <i>
                    <ObligationIcon />
                  </i>
                </div>
                <div>
                  <h4>Free and No Obligation</h4>
                  <h6>
                    Get up to 3 quotes from our selected suppliers by filling in
                    only 1 form
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="video">
                <figure>
                  <Image alt="img" src={videoIcon} style={{ width: "100%", height: "auto" }}/>
                </figure>

                <button
                  onClick={() => {
                    openVideoModal();
                  }}
                  type="button"
                >
                  <i>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 8.49951L0.5 0.27227L0.5 16.7268L11 8.49951Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                </button>
              </div>
              <div className="d-sm-flex mt-4">
                <div className="call-for">
                  <p>Call For a Quote:</p>
                  <Link href="callto:+921234866731">+92 1234 866 731</Link>
                </div>
                <div className="call-for mail-for">
                  <p>Email Address:</p>
                  <Link href="mailto:info@kangaroosolar.com.au">
                    <p>info@kangaroosolar.com.au</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="xKxrkht7CpY"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default WhyUseEnergix;
