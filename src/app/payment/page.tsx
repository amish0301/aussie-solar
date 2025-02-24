import LetterBox from "@/components/home-two/LetterBox";
import Payment from "@/components/payment/Payment";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <Payment />
          <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default page;
