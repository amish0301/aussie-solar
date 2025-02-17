import React from "react";
import directorImg from "../../../public/assets/img/chris-hemsworth.png";
import about1 from "../../../public/assets/img/about-1.jpg";
import about2 from "../../../public/assets/img/about-2.jpg";
import Image from "next/image";
import ExperienceTwoIcon from "@/svg/ExperienceTwoIcon";
import CountUpContent from "@/elements/counter/CountUpContent";
const WellComeToSolarSec = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <p>Welcome to Solar Power Save Energy</p>
                <div className="line"></div>
                <h2>Energize Society Reliable Energy</h2>
              </div>
              <div className="renewable-group w-100">
                <p>
                  leading renewable energy solutions provider that is
                  revolutionising and redefining the way sustainable energy
                  sources are harnessed across the world. Present in 18
                  countries across Asia, Australia, Europe Africa and the
                  Americas, Veztaz is powering.
                </p>
                <Image alt="chris-hemsworth" src={directorImg} />
                <h3>Alines Jannie</h3>
                <h6>Director of Renewable Group</h6>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-img">
                <Image alt="about" src={about1}/>
                <Image alt="about" className="img-about" src={about2} />
                <div className="about-two-content">
                  <div className="d-flex">
                    <i>
                      <ExperienceTwoIcon />
                    </i>
                    <div>
                      <div className="d-flex">
                        <h2 className="timer count-title count-number">
                          {" "}
                          <CountUpContent number={18} text="" />{" "}
                        </h2>
                        <span>+</span>
                      </div>
                      <h6>Years Experience</h6>
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

export default WellComeToSolarSec;
