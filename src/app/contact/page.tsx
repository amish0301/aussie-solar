import ContactMain from "@/components/contact/ContactMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import { generateMetadata } from "@/utils/utils";
import React from "react";

// Metadata
export const metadata = generateMetadata({
  title: "Contact Us | Leading Solar Energy Solutions in Australia",
  description:
    "Reach out to Australia's trusted experts in solar panel installation and renewable energy solutions. Whether you're interested in residential or commercial solar systems, our team is here to provide sustainable and cost-effective energy alternatives. Contact us today to discuss your solar energy needs and take the first step towards a greener future.",
  url: "/contact",
  image: ["/assets/img/banners/about-banner.jpg"],
});

const ContactPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ContactMain />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default ContactPage;
