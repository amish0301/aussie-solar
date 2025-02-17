import EnergyIcon from "@/svg/EnergyIcon";
import PowerIcon from "@/svg/PowerIcon";
import ToolsIcon from "@/svg/ToolsIcon";
import React from "react";

const EnergySpecialists = () => {
  return (
    <>
      <div className="container gap">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="use-energix mb-xl-0 d-flex">
              <div className="use-energix-icon">
                <i>
                  <EnergyIcon />
                </i>
              </div>
              <div>
                <a href="#">
                  <h4>Renewable Energy Specialists</h4>
                </a>
                <p>
                  Already have an idea of what you’re looking for and don’t want
                  to waste any more time
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="use-energix mb-xl-0 d-flex">
              <div className="use-energix-icon">
                <i>
                  <PowerIcon />
                </i>
              </div>
              <div>
                <a href="#">
                  <h4>Affordable Electrical Services</h4>
                </a>
                <p>
                  Already have an idea of what you’re looking for and don’t want
                  to waste any more time
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="use-energix mb-0 d-flex">
              <div className="use-energix-icon">
                <i>
                  <ToolsIcon />
                </i>
              </div>
              <div>
                <a href="#">
                  <h4>Approved Partner & Installer</h4>
                </a>
                <p>
                  Already have an idea of what you’re looking for and don’t want
                  to waste any more time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergySpecialists;
