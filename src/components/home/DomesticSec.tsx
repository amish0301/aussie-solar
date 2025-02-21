import DomesticCommercialIcon from "@/svg/DomesticCommercialIcon";
import DomesticSvgIcon from "@/svg/DomesticSvgIcon";
import Link from "next/link";
import React from "react";

const DomesticSec = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="heading">
              <h2 className="text-center">
                Australia's Trusted Solar Energy Experts - Powering a
                Sustainable Future
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="domestic">
                <i>
                  <DomesticSvgIcon />
                </i>
                <h3>Domestic Installation</h3>
                <p>
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                  EV Charging
                </p>
                <Link href="/packages/residential-solar" className="button">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="domestic commercial">
                <i>
                  <DomesticCommercialIcon />
                </i>
                <h3>Commercial Installation</h3>
                <p>
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                  EV Charging
                </p>
                <Link href="/packages/commercial-solar" className="button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DomesticSec;
