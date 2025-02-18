import FaqMain from "@/components/faq/FaqMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";

const GalleryPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <FaqMain />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default GalleryPage;
