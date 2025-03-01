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
                Australia&apos;s Trusted Solar Energy Experts - Powering a
                Sustainable Future
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="domestic">
                <i>
                  <DomesticSvgIcon />
                </i>
                <h3>Residential Installation</h3>
                <p>
                Comprehensive residential solar solutions with top-tier 1 panel installation, reliable battery storage, and intelligent energy management—designed for maximum efficiency and long-term savings.
                </p>
                <Link href="/packages/1" className="button">
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
                Advanced commercial solar installations, engineered for superior performance, cost savings, and sustainability—empowering businesses with reliable, long-term energy solutions.  
                </p>
                <Link href="/packages/2" className="button">
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
