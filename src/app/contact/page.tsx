import ContactMain from "@/components/contact/ContactMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ContactMain />
          <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default ContactPage;
