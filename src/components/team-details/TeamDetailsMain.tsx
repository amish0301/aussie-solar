import React from "react";
import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import ExperienceSec from "./ExperienceSec";
import AboutMeSec from "./AboutMeSec";
import RequestAQuote from "../home/RequestAQuote";

const TeamDetailsMain = () => {
  return (
    <>
      <BreadCambDefault title="Team Details" pages="Pages" />
      <ExperienceSec />
      <AboutMeSec />
      <RequestAQuote noTop="" quoteClass="two m-0"/>
    </>
  );
};

export default TeamDetailsMain;
