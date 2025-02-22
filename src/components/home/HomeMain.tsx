import React from "react";
import HeroSlider from "./HeroSlider";
import DomesticSec from "./DomesticSec";
import SaveEnegryGallarySec from "./SaveEnegryGallarySec";
import LatestInstallations from "./LatestInstallations";
import WhyUse from "./WhyUseUs";
import ProcessSolutionsSec from "./ProcessSolutionsSec";
import TestimonialsSec from "./TestimonialsSec";
import PricingPlan from "./PricingPlan";
import RequestAQuote from "./RequestAQuote";
import HomeBlogSec from "./HomeBlogSec";
import Sponsors from "./Sponsors";
import bgImg from "../../../public/assets/img/whyus-bg.jpeg";

const HomeMain = () => {
  return (
    <>
      <HeroSlider />
      <DomesticSec />
      <SaveEnegryGallarySec />
      <LatestInstallations classOne="" noBottom="no-bottom"/>
      <WhyUse bgImg={bgImg} propsClass=''/>
      <PricingPlan />
      <RequestAQuote noTop="no-top" quoteClass=""/>
      <Sponsors />
      <ProcessSolutionsSec propsClass="gap"/>
      <TestimonialsSec propsClass="no-top" />
      {/* <HomeBlogSec /> */}
    </>
  );
};

export default HomeMain;
