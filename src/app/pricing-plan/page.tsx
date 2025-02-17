import LetterBox from "@/components/home-two/LetterBox";
import PricingPlanMain from "@/components/pricing-plan/PricingPlanMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <PricingPlanMain />
          <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default page;
