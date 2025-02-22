"use client";
import { useState } from "react";
import SaveMoneyIcon from "@/svg/SaveMoneyIcon";
import {
  faHeadset,
  faMedal,
  faSolarPanel,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import savings from "../../../public/assets/img/savings.svg";
import videoIcon from "../../../public/assets/img/whyus-video.gif";
interface propsType {
  bgImg: StaticImageData | null;
  propsClass: string;
}
const WhyUseEnergix = ({ bgImg, propsClass }: propsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section
        className={`energix gap ${propsClass}`}
        style={{ backgroundImage: `url(${bgImg ? bgImg.src : ""})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="heading">
              <h2 className="text-center">
                Expert In-House Team of Electricians and Solar Specialists with
                Over 8 Years of Experience
              </h2>
            </div>
            <div className="col-xl-6">
              <div className="heading">
                <p>Commitment to a Sustainable Future</p>
                <div className="line"></div>
                <h2>Why Choose Kangaroo Solar?</h2>
              </div>
              <div className="use-energix-grid d-grid">
                {/* premium quality */}
                <div className="use-energix">
                  <div className="use-energix-icon">
                    <i>
                      <FontAwesomeIcon
                        icon={faMedal}
                        style={{
                          color: "#0A9642",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </i>
                  </div>
                  <h4>Uncompromised Quality</h4>
                </div>

                {/* competitive pricing */}
                <div className="use-energix">
                  <div className="use-energix-icon">
                    <i>
                      <Image alt="img" src={savings} width={60} height={60} />
                    </i>
                  </div>
                  <h4>Best Value Pricing</h4>
                </div>

                <div className="use-energix">
                  <div className="use-energix-icon">
                    <i>
                      <FontAwesomeIcon
                        icon={faSolarPanel}
                        style={{
                          color: "#0A9642",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </i>
                  </div>
                  <h4>Comprehensive Solar Solutions</h4>
                </div>

                <div className="use-energix">
                  <div className="use-energix-icon">
                    <i>
                      <FontAwesomeIcon
                        icon={faHeadset}
                        style={{
                          color: "#0A9642",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </i>
                  </div>
                  <h4>Exceptional After-Sales Support</h4>
                </div>

                {/* solar consultants */}
                <div className="use-energix">
                  <div className="use-energix-icon">
                    <i>
                      <FontAwesomeIcon
                        icon={faUsersLine}
                        style={{
                          color: "#0A9642",
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </i>
                  </div>
                  <h4>Trusted Solar Advisors</h4>
                </div>

                {/* finance option */}
                <div className="use-energix">
                  <div className="use-energix-icon">
                    <i>
                      <SaveMoneyIcon />
                    </i>
                  </div>
                  <h4>Flexible Payment Plans</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="video">
                <figure>
                  <Image
                    alt="img"
                    src={videoIcon}
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>

                <button
                  onClick={() => {
                    openVideoModal();
                  }}
                  type="button"
                >
                  {/* <i>
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
                  </i> */}
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

export default WhyUseEnergix;
