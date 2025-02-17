import AboutMain from "@/components/about/AboutMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <AboutMain />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default AboutPage;
