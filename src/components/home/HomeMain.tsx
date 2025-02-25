import { allBrands } from "@/data/service-product-data";
import bgImg from "../../../public/assets/img/whyus-bg.jpeg";
import DomesticSec from "./DomesticSec";
import HeroSlider from "./HeroSlider";
import LatestInstallations from "./LatestInstallations";
import ProcessSolutionsSec from "./ProcessSolutionsSec";
import RequestAQuote from "./RequestAQuote";
import SaveEnegryGallarySec from "./SaveEnegryGallarySec";
import Sponsors from "./Sponsors";
import TestimonialsSec from "./TestimonialsSec";
import WhyUse from "./WhyUseUs";

const HomeMain = () => {
  return (
    <>
      <HeroSlider />
      <DomesticSec />
      <SaveEnegryGallarySec />
      <LatestInstallations classOne="" noBottom="no-bottom" />
      <WhyUse bgImg={bgImg} propsClass="" />
      {/* <PricingPlan /> */}
      <Sponsors brands={allBrands ?? []} />
      <ProcessSolutionsSec propsClass="gap" />
      <RequestAQuote noTop="no-top" quoteClass="" />
      <TestimonialsSec propsClass="no-top" />
      {/* <HomeBlogSec /> */}
    </>
  );
};

export default HomeMain;
