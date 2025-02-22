import aboutImg from "../../../public/assets/img/banners/banner-man.jpeg";
import SolarEnergySec from "../home-two/SolarEnergySec";
import ProcessSolutionsSec from "../home/ProcessSolutionsSec";
import TestimonialsSec from "../home/TestimonialsSec";
import BreadCamb from "../shearedComponents/BreadCamb";
// import CompanyHistory from "./CompanyHistory";
import WellComeToSolarSec from "./WellComeToSolarSec";

const AboutMain = () => {
  return (
    <>
      <BreadCamb title="About Us" bgImg={aboutImg} />
      <WellComeToSolarSec />
      <ProcessSolutionsSec propsClass="gap no-top" />
      <SolarEnergySec />
      {/* <CreativeTeam bgImg={null} /> */}
      {/* <CompanyHistory /> */}
      <TestimonialsSec propsClass="" />
    </>
  );
};

export default AboutMain;
