import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import WellComeToSolarSec from "./WellComeToSolarSec";
import ProcessSolutionsSec from "../home/ProcessSolutionsSec";
import SolarEnergySec from "../home-two/SolarEnergySec";
import CreativeTeam from "../home-two/CreativeTeam";
import CompanyHistory from "./CompanyHistory";
import TestimonialsSec from "../home/TestimonialsSec";
const AboutMain = () => {
  return (
    <>
      <BreadCamb title="About Us" />
      <WellComeToSolarSec /> 
      <ProcessSolutionsSec propsClass="gap no-top" />
      <SolarEnergySec />
      <CreativeTeam bgImg={null} />
      <CompanyHistory />
      <TestimonialsSec propsClass="" />
    </>
  );
};

export default AboutMain;
