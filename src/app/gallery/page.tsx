import GalleryMain from "@/components/gallery/GalleryMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const GalleryPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <GalleryMain />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default GalleryPage;
