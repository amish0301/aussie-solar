import React from "react";
import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import Pricing from "./Pricing";
import WhyUse from "../home/WhyUseUs";

const PricingPlanMain = () => {
  return (
    <>
      <BreadCambDefault pages="Pages" title="Pricing Plans" />
      <Pricing /> 
      <WhyUse propsClass="two" bgImg={null}/>
    </>
  );
};

export default PricingPlanMain;
