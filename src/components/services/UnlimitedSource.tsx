import BattaryIcon from "@/svg/BattaryIcon";
import BattaryIconTwo from "@/svg/BattaryIconTwo";
import CommercialSolarEnergyIcon from "@/svg/CommercialSolarEnergyIcon";
import CredentialsIcon from "@/svg/CredentialsIcon";
import InvestmentIcon from "@/svg/InvestmentIcon";
import NetWorkIcon from "@/svg/NetWorkIcon";
import SolarEnergyIcon from "@/svg/SolarEnergyIcon";
import TechnologiesIcon from "@/svg/TechnologiesIcon";
import React from "react";

const UnlimitedSource = () => {
  return (
    <>
      <section className="section-solar-energy gap">
        <div className="container">
          <div className="heading">
            <p>Solutions of Solar Energy</p>
            <div className="line"></div>
            <h2>Unlimited source of energy</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <BattaryIconTwo/>
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Battery Storage Solutions</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                     <CommercialSolarEnergyIcon/>
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Commercial solar energy</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <InvestmentIcon/>
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>High Return On Investment</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                      <CredentialsIcon/>
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Boost Green Credentials</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                   <SolarEnergyIcon/>
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Industrial Solar Energy</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5 mb-0">
                <div className="use-energix-icon">
                  <i>
                     <TechnologiesIcon/>
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Scale With New Technologies</h4>
                  </a>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnlimitedSource;
