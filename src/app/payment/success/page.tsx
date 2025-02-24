import LetterBox from "@/components/home-two/LetterBox";
import Success from "@/components/payment/Success";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <Success />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default page;
