import React from "react";
import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import Pricing from "./Pricing";
import WhyUseEnergix from "../home/WhyUseEnergix";

const PricingPlanMain = () => {
  return (
    <>
      <BreadCambDefault pages="Pages" title="Pricing Plans" />
      <Pricing /> 
      <WhyUseEnergix propsClass="two" bgImg={null}/>
    </>
  );
};

export default PricingPlanMain;
