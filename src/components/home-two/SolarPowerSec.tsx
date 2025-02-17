import React from "react";
import energy from "../../../public/assets/img/energize-society.jpg";
import Image from "next/image";
import ExperienceIcon from "@/svg/ExperienceIcon";
import SuccessProjectIcon from "@/svg/SuccessProjectIcon";
import CountUpContent from "@/elements/counter/CountUpContent";
const SolarPowerSec = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="energize-society">
                <figure>
                  <Image alt="img" src={energy} style={{ width: "100%", height: "100%" }}/>
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading">
                <p>Welcome to Solar Power Save Energy</p>
                <div className="line"></div>
                <h2>Energize Society Reliable Energy</h2>
              </div>
              <div className="about-two-content">
                <p>
                  leading renewable energy solutions provider that is
                  revolutionising and redefining the way sustainable energy
                  sources are harnessed across the world. Present in 18
                  countries across Asia, Australia, Europe Africa and the
                  Americas, Veztaz is powering.
                </p>
                <div className="d-sm-flex justify-content-between me-sm-5">
                  <div className="d-flex mb-sm-0 mb-3">
                    <i>
                      <ExperienceIcon />
                    </i>
                    <div>
                      <div className="d-flex">
                        <h2 className="timer count-title count-number">
                          <CountUpContent number={18} text="" />
                        </h2>
                        <span>+</span>
                      </div>
                      <h6>Years Experience</h6>
                    </div>
                  </div>
                  <div className="d-flex">
                    <i>
                      <SuccessProjectIcon />
                    </i>
                    <div>
                      <div className="d-flex">
                        <h2 className="timer count-title count-number">
                          <CountUpContent number={21} text="" />
                        </h2>
                        <span>+</span>
                      </div>
                      <h6>Successful Projects</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarPowerSec;
