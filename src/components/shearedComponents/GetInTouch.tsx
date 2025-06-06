"use client";
import useGlobalContext from "@/hooks/use-context";
import Image from "next/image";
import bgImg from "../../../public/assets/img/get-in-touch-bgimg.jpg";
import arista from "../../../public/assets/img/get-in-touch.png";
import PhoneIcon from "@/svg/PhoneIcon";

const GetInTouch = () => {
  const { openLetterBox, setOpenLetterBox } = useGlobalContext();

  return (
    <div
      className="request-quote mt-4 mb-4 two container"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="row">
        <div className="col-lg-7 px-5">
          <div className="heading">
            <h2>Get in touch to discuss how we can help you!</h2>
            <h6>{`We're`} pleased to be welcoming customers to join us.</h6>
          </div>
          <div className="d-md-flex align-items-center mt-md-5">
            <button
              onClick={() => setOpenLetterBox(!openLetterBox)}
              className="button newsbox"
            >
              Request a Quote
            </button>
            <div className="request-quote-info">
              <div>
                <i>
                  <PhoneIcon />
                </i>
              </div>
              <div className="d-flex align-items-center mt-2">
                <h4>Call Us Now: </h4>
                <a href="callto:01234525407">
                  <p className="mx-2">+61485993765</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="arista-square-img">
            <Image
              alt="arista-square-1"
              src={arista}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
