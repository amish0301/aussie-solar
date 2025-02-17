import React from "react";
import checkImg from "../../../public/assets/img/check-mark.png";
import Image from "next/image";
import HomeSolarIcon from "@/svg/HomeSolarIcon";
import CommercialSolarEnergyTwoIcon from "@/svg/CommercialSolarEnergyTwoIcon";
import IndustrialSolarEnergy from "@/svg/IndustrialSolarEnergy";
const SolarPV = () => {
  return (
    <>
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading">
                <h2>Is Solar PV worth it?</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="renewable-group">
                <p>
                  leading renewable energy solutions provider that is
                  revolutionising and redefining the way sustainable energy
                  sources are harnessed across the world. Present in 18
                  countries across Asia, Australia, Europe Africa and the
                  Americas, Veztaz is powering.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-4 col-lg-6">
              <div className="solar-pv">
                <i>
                  <HomeSolarIcon />
                </i>
                <h4>Home solar energy</h4>
                <div className="team-info">
                  <ul className="pb-0">
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Reduce Bills
                    </li>
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Low Maintenance
                    </li>
                    <li className="pb-0">
                      <Image alt="check-mark" src={checkImg} />
                      25 Year Panel Warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="solar-pv">
                <i>
                  <CommercialSolarEnergyTwoIcon/>
                </i>
                <h4>Commercial solar energy</h4>
                <div className="team-info">
                  <ul className="pb-0">
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Reduce Bills
                    </li>
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Low Maintenance
                    </li>
                    <li className="pb-0">
                      <Image alt="check-mark" src={checkImg} />
                      25 Year Panel Warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="solar-pv">
                <i>
                  <IndustrialSolarEnergy/>
                </i>
                <h4>Industrial solar energy</h4>
                <div className="team-info">
                  <ul className="pb-0">
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Reduce Bills
                    </li>
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Low Maintenance
                    </li>
                    <li className="pb-0">
                      <Image alt="check-mark" src={checkImg} />
                      25 Year Panel Warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarPV;
