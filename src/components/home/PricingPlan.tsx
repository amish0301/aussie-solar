import { pricingPlanData } from "@/data/pricing-plan-data";
import React from "react";
import PricingPlanCard from "../shearedComponents/PricingPlanCard";
import { pricingPlan } from "@/interFace/interFace";

const PricingPlan = () => {
  return (
    <>
      <section className="pricing-plans gap">
        <div className="container">
          <div className="heading">
            <p>Pricing Plans</p>
            <div className="line"></div>
            <h2>Effective & Flexible Pricing</h2>
          </div>
          <div className="row">
            {pricingPlanData?.slice(0, 3)?.map((item, index) => (
              <PricingPlanCard key={index} data={item as pricingPlan} margin=""/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
