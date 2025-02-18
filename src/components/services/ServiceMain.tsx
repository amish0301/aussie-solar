import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import SustainableEnergy from "./SustainableEnergy";
import FaultActivity from "./FaultActivity";
import RequestAQuote from "../home/RequestAQuote";
import UnlimitedSource from "./UnlimitedSource";
import WhyUse from "../home/WhyUseUs";
import SolarPV from "./SolarPV";

const ServiceMain = () => {
  return (
    <>
      <BreadCamb title="Services" />
      <SustainableEnergy />
      <FaultActivity />
      <RequestAQuote noTop="" quoteClass="two m-0" />
      <UnlimitedSource />
      <WhyUse propsClass="two" bgImg={null} />
      <SolarPV />
    </>
  );
};

export default ServiceMain;
