//@refresh

import LetterBox from "@/components/home-two/LetterBox";
import HomeMain from "@/components/home/HomeMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";

const Home = () => {
  return (
    <>
      <Wrapper>
        <main>
          <HomeMain />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default Home;
