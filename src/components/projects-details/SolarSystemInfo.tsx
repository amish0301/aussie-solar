import { TprojectData, idType } from "@/interFace/interFace";
import React from "react";

interface propsType{
    data:TprojectData
}

const SolarSystemInfo = ({data}:propsType) => {
   
  return (
    <>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="solar-system">
                <span className="d-flex">Solar System UK - July 2013</span>
                <h2> {data?.title} </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim ven iam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure anim id est labor ums nisi ut aliquip ex ea commosi ut
                  aliquip ex ea commodo consequatdo.
                  <br />
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui offi cia deserunt mollit anim id
                  est laborums nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="information">
                <li>
                  <span>CLIENT</span>
                  <h6>Renewable Enery Company</h6>
                </li>
                <li>
                  <span>TECHNOLOGY</span>
                  <h6>Solar PV panels</h6>
                </li>
                <li>
                  <span>SYSTEM SIZE</span>
                  <h6>33.15 kWp</h6>
                </li>
                <li>
                  <span>Energy Generation</span>
                  <h6>80,000 kWh / Year</h6>
                </li>
                <li>
                  <span>Carbon Savings</span>
                  <h6>87 Tons / Year</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarSystemInfo;
