"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImg from "../../../public/assets/img/background.jpg";
import CredentialsIcon from "@/svg/CredentialsIcon";
import SolarEnergyIcon from "@/svg/SolarEnergyIcon";
import TechnologiesIcon from "@/svg/TechnologiesIcon";
import PhoneIcon from "@/svg/PhoneIcon";
import arista from "../../../public/assets/img/arista-square-1.png";
import videoTwo from "../../../public/assets/img/video-2.jpg";
import ModalVideo from "react-modal-video";
import BattaryIconTwo from "@/svg/BattaryIconTwo";
import InvestmentIcon from "@/svg/InvestmentIcon";
import CommercialSolarEnergyIcon from "@/svg/CommercialSolarEnergyIcon";
import useGlobalContext from "@/hooks/use-context";

const SolarEnergySec = () => {
  const { openLetterBox, setOpenLetterBox } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="section-solar-energy gap">
        <div className="container">
          <div className="heading">
            <p>Solutions of Solar Energy</p>
            <div className="line"></div>
            <h2>Produce Your Own Clean Save ourthe Environment</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 ">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <BattaryIconTwo />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Battery Storage Solutions</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="video two">
                <figure>
                  <Image alt="img" src={videoTwo} style={{ width: "100%", height: "auto" }}/>
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
                      ></path>
                    </svg>
                  </i>
                </button>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <CommercialSolarEnergyIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Commercial solar energy</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <InvestmentIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>High Return On Investment</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <CredentialsIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Boost Green Credentials</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <SolarEnergyIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Industrial Solar Energy</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5 mb-0 ">
                <div className="use-energix-icon">
                  <i>
                    <TechnologiesIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Scale With New Technologies</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="request-quote two"
            style={{ backgroundImage: `url(${bgImg.src})` }}
          >
            <div className="row">
              <div className="col-lg-7">
                <div className="heading">
                  <h2>Get in touch to discuss how we can help you!</h2>
                  <h6>
                    {`We're`} pleased to be welcoming customers to join us.
                  </h6>
                </div>
                <div className="d-md-flex align-items-center mt-md-5">
                  <button onClick={()=>setOpenLetterBox(!openLetterBox)} className="button newsbox">
                    Request a Quote
                  </button>
                  <div className="request-quote-info">
                    <div>
                      <i>
                        <PhoneIcon />
                      </i>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <h4>Phone No:</h4>
                      <a href="callto:01234525407">
                        <p>01234 525 407</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="arista-square-img">
                  <Image alt="arista-square-1" src={arista} style={{ width: "100%", height: "100%" }}/>
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

export default SolarEnergySec;
