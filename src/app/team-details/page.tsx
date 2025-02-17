import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import TeamDetailsMain from "@/components/team-details/TeamDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
            <TeamDetailsMain/>
            <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default page;
