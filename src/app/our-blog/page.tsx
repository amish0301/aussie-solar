import LetterBox from "@/components/home-two/LetterBox";
import OurBlogMain from "@/components/our-blog/OurBlogMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <OurBlogMain />
          <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default page;
