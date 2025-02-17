import HomeTwoMain from "@/components/home-two/HomeTwoMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const HomeTwoPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <HomeTwoMain />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default HomeTwoPage;
