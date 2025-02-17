import LetterBox from "@/components/home-two/LetterBox";
import ProjectDetailsMain from "@/components/projects-details/ProjectDetailsMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ProjectDetailsMain id={4} />
          <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default page;
