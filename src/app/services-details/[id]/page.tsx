import LetterBox from "@/components/home-two/LetterBox";
import ServiceDetailsMain from "@/components/services-details/ServiceDetailsMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ServiceDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <Wrapper>
        <main>
          <ServiceDetailsMain id={id} />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default ServiceDetailsDynamicPage;
