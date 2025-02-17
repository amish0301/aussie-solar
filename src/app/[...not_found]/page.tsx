import ErrorPageMain from "@/components/error-page/ErrorPageMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ErrorPageMain />
        </main>
      </Wrapper>
    </>
  );
};

export default page;
