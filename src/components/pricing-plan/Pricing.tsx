import React from "react";
import { pricingPlanData } from "@/data/pricing-plan-data";
import PricingPlanCard from "../shearedComponents/PricingPlanCard";
import { pricingPlan } from "@/interFace/interFace";
const Pricing = () => {
  return (
    <>
      <section className="pricing-plan-page pricing-plans pb-0 gap">
        <div className="container">
          <div className="row">
            {pricingPlanData?.map((item, index) => (
              <PricingPlanCard margin="" key={index} data={item as pricingPlan}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
