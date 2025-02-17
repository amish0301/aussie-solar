import React from "react";
import HeroSlider from "./HeroSlider";
import EnergySpecialists from "./EnergySpecialists";
import SolarPowerSec from "./SolarPowerSec";
import ProjectSecHomeTwo from "./ProjectSecHomeTwo";
import SolarEnergySec from "./SolarEnergySec";
import RecentProjects from "./RecentProjects";
import TestimonaialHomeTwo from "./TestimonaialHomeTwo";
import CreativeTeam from "./CreativeTeam";
import RecentNewsSec from "./RecentNewsSec";
import bgImg from "../../../public/assets/img/meet-our.jpg";
const HomeTwoMain = () => {
  return (
    <>
      <HeroSlider />
      <EnergySpecialists />
      <SolarPowerSec />
      <ProjectSecHomeTwo />
      <SolarEnergySec />
      <RecentProjects />
      <TestimonaialHomeTwo />
      <CreativeTeam bgImg={bgImg}/>
      <RecentNewsSec />
    </>
  );
};

export default HomeTwoMain;
