import React from "react";
import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import SolarSystemInfo from "./SolarSystemInfo";
import { TprojectData, idType } from "@/interFace/interFace";
import { projectData } from "@/data/project-data";
import Thumbnail from "./Thumbnail";
import EnergySystem from "./EnergySystem";
import LatestInstallations from "../home/LatestInstallations";
import BreadCambThree from "../shearedComponents/BreadCambThree";

const ProjectDetailsMain = ({ id }: idType) => {
  const data = projectData?.find((item) => item.id == id);
  return (
    <>
      <BreadCambThree subPage="Our Projects" title=" Project Details" pages="Pages" />
      <SolarSystemInfo data={data as TprojectData} />
      <Thumbnail />
      <EnergySystem />
      <LatestInstallations classOne="two" noBottom=""/> 
    </>
  );
};

export default ProjectDetailsMain;
