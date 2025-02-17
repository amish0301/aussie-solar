import CalculationIcon from "@/svg/CalculationIcon";
import EstimateCalculationIcon from "@/svg/EstimateCalculationIcon";
import ProjectIcon from "@/svg/ProjectIcon";
import React from "react";

interface propsType{
  propsClass:string;
}

const ProcessSolutionsSec = ({propsClass}:propsType) => {
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
                  Our mission is to provide clear, high quality and affordable
                  ecological advice and services to public.
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
                  Our mission is to provide clear, high quality and affordable
                  ecological advice and services to public.
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
                  Our mission is to provide clear, high quality and affordable
                  ecological advice and services to public.
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
