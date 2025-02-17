import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import SustainableEnergy from "./SustainableEnergy";
import FaultActivity from "./FaultActivity";
import RequestAQuote from "../home/RequestAQuote";
import UnlimitedSource from "./UnlimitedSource";
import WhyUseEnergix from "../home/WhyUseEnergix";
import SolarPV from "./SolarPV";

const ServiceMain = () => {
  return (
    <>
      <BreadCamb title="Services" />
      <SustainableEnergy />
      <FaultActivity />
      <RequestAQuote noTop="" quoteClass="two m-0" />
      <UnlimitedSource />
      <WhyUseEnergix propsClass="two" bgImg={null} />
      <SolarPV />
    </>
  );
};

export default ServiceMain;
