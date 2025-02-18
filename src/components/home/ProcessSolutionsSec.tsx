import CalculationIcon from "@/svg/CalculationIcon";
import EstimateCalculationIcon from "@/svg/EstimateCalculationIcon";
import ProjectIcon from "@/svg/ProjectIcon";
import React from "react";

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
              <div className="free-consultation mt-lg-0">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSolutionsSec;
