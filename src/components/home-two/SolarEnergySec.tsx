"use client";
import useGlobalContext from "@/hooks/use-context";
import BattaryIconTwo from "@/svg/BattaryIconTwo";
import CommercialSolarEnergyIcon from "@/svg/CommercialSolarEnergyIcon";
import CredentialsIcon from "@/svg/CredentialsIcon";
import ExpertiseIcon from "@/svg/ExpertiseIcon";
import PhoneIcon from "@/svg/PhoneIcon";
import SolarRetailer from "@/svg/SolarRetailer";
import TechnologiesIcon from "@/svg/TechnologiesIcon";
import Image from "next/image";
import { useState } from "react";
import bgImg from "../../../public/assets/img/get-in-touch-bgimg.jpg";
import arista from "../../../public/assets/img/get-in-touch.png";
import videoTwo from "../../../public/assets/residential_gif.gif";

const SolarEnergySec = () => {
  const { openLetterBox, setOpenLetterBox } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="section-solar-energy gap">
        <div className="container">
          <div className="heading">
            <p>Our Solar Energy Solutions</p>
            <div className="line"></div>
            <h2>Harness Clean Energy, Reduce Costs, and Build a Sustainable Future</h2>
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
                  <a href="/services-details/4">
                    <h4>Battery Storage Solutions</h4>
                  </a>
                  <p>
                  Enhance your energy independence with cutting-edge battery storage solutions, ensuring reliable power even during outages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="video two">
                <figure>
                  <Image alt="img" src={videoTwo} style={{ width: "100%", height: "auto" }}/>
                </figure>
                {/* <button
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
                </button> */}
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
                  <a href="/packages/commercial-solar">
                    <h4>Commercial solar energy</h4>
                  </a>
                  <p>
                  Optimize your business operations with advanced commercial solar systems, maximizing energy efficiency and cost savings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <SolarRetailer />
                  </i>
                </div>
                <div>
                  <a href="/contact">
                    <h4>Recognized Approved Solar Homes Retailer</h4>
                  </a>
                  <p>
                  As an Approved Solar Homes Retailer, we Warranty high-quality solar solutions with full compliance, unlocking government incentives for you.
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
                  <a href="/packages/residential-solar">
                    <h4>Boost Green Credentials</h4>
                  </a>
                  <p>
                  Strengthen your sustainability efforts with our eco-friendly solar installations, reducing your carbon footprint and energy expenses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <ExpertiseIcon />
                  </i>
                </div>
                <div>
                  <a href="/packages/commercial-solar">
                    <h4>Industry Expertise</h4>
                  </a>
                  <p>
                  Backed by years of experience, our expert team delivers efficient, high-performance solar solutions tailored to your needs.
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
                  <a href="/contact">
                    <h4>Comprehensive Energy Solution</h4>
                  </a>
                  <p>
                  From consultation to installation, we provide end-to-end solar solutions, ensuring maximum savings and sustainability for every customer.
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
                  <h2>Connect with us to explore Comprehensive solar solutions</h2>
                  <h6>
                    {`We're`} excited to welcome you as a valued customer 
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
      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="xKxrkht7CpY"
        onClose={() => {
          openVideoModal();
        }}
      /> */}
    </>
  );
};

export default SolarEnergySec;
