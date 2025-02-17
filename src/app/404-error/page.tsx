import ErrorPageMain from "@/components/error-page/ErrorPageMain";
import LetterBox from "@/components/home-two/LetterBox";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ErrorPageMain />
          <LetterBox/>
        </main>
      </Wrapper>
    </>
  );
};

export default page;
