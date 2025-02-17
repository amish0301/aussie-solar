import React from "react";
import HeroSlider from "./HeroSlider";
import DomesticSec from "./DomesticSec";
import SaveEnegryGallarySec from "./SaveEnegryGallarySec";
import LatestInstallations from "./LatestInstallations";
import WhyUseEnergix from "./WhyUseEnergix";
import ProcessSolutionsSec from "./ProcessSolutionsSec";
import TestimonialsSec from "./TestimonialsSec";
import PricingPlan from "./PricingPlan";
import RequestAQuote from "./RequestAQuote";
import HomeBlogSec from "./HomeBlogSec";
import Sponsors from "./Sponsors";
import bgImg from "../../../public/assets/img/energix.jpg";
const HomeMain = () => {
  return (
    <>
      <HeroSlider />
      <DomesticSec />
      <SaveEnegryGallarySec />
      <LatestInstallations classOne="" noBottom="no-bottom"/>
      <WhyUseEnergix bgImg={bgImg} propsClass=''/>
      <ProcessSolutionsSec propsClass="gap"/>
      <TestimonialsSec propsClass="no-top" />
      <PricingPlan />
      <RequestAQuote noTop="no-top" quoteClass=""/>
      <HomeBlogSec />
      <Sponsors />
    </>
  );
};

export default HomeMain;
