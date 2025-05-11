import AboutMain from "@/components/about/AboutMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import { generateMetadata } from "@/utils/utils";
import React from "react";

// Metadata
export const metadata = generateMetadata({
  title: "About Us",
  description:
    "Learn about Aussie Electrical Solar Energy, our mission, vision, and commitment to providing high-efficiency solar energy solutions. Discover how we help homeowners and businesses embrace sustainable energy.",
  url: "/about",
  image: [
    "/assets/img/banners/banner-man.jpeg",
    "/assets/img/about-1.jpeg",
    "/assets/img/about-2.jpg",
    "/assets/img/get-in-touch-bgimg.jpg",
    "/assets/img/get-in-touch.png",
    "/assets/residential_gif.gif",
  ],
});

const AboutPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <AboutMain />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default AboutPage;
