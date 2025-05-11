import CalculationIcon from "@/svg/CalculationIcon";
import EstimateCalculationIcon from "@/svg/EstimateCalculationIcon";
import ProjectIcon from "@/svg/ProjectIcon";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faShieldAlt,
  faSolarPanel,
} from "@fortawesome/free-solid-svg-icons";

interface propsType {
  propsClass: string;
}

const ProcessSolutionsSec = ({ propsClass }: propsType) => {
  return (
    <>
      <section className={`process-solutions ${propsClass}`}>
        <div className="container">
          <div className="heading">
            <p>process and the solutions we can provide</p>
            <div className="line"></div>
            <h2>what you can expect from our sustainability consultants</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Book a Free Consultation</h3>
                  <span>1</span>
                </div>
                <p>
                  Schedule a free, no-obligation consultation to learn how solar
                  can reduce your energy costs and provide long-term savings.
                </p>
                <CalculationIcon />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Estimate the Calculation</h3>
                  <span>2</span>
                </div>
                <p>
                  Get a customized solar savings estimate based on your energy
                  usage, helping you understand the financial benefits of going
                  solar.
                </p>
                <EstimateCalculationIcon />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Hire us for Your Projects</h3>
                  <span>3</span>
                </div>
                <p>
                  Trust our experienced solar professionals to design and
                  install a high-quality, efficient solar energy system tailored
                  to your needs.
                </p>
                <ProjectIcon />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Industry Expertise</h3>
                  <span>4</span>
                </div>
                <p>
                  Aussie Electrical Solar Energy&apos;s expert team offers over a decade of
                  experience, delivering top-notch solar solutions for a
                  sustainable, greener future.
                </p>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  style={{ color: "#0A9642", width: "60px", height: "60px" }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Commitment to Quality</h3>
                  <span>5</span>
                </div>

                <p>
                  Aussie Electrical Solar Energy prioritizes quality, offering high-performance,
                  durable solar solutions that meet top industry standards for
                  reliable, efficient, and sustainable energy savings.
                </p>
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  style={{ color: "#0A9642", width: "60px", height: "60px" }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Trusted Solar Provider</h3>
                  <span>6</span>
                </div>

                <p>
                  Aussie Electrical Solar Energy offers reliable, efficient energy solutions
                  with maximum rebates, expert support, seamless installations,
                  and a customer-first approach for sustainable power.
                </p>
                <FontAwesomeIcon
                  icon={faSolarPanel}
                  style={{ color: "#0A9642", width: "60px", height: "60px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSolutionsSec;
