import FaqMain from "@/components/faq/FaqMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import { generateMetadata } from "@/utils/utils";

export const metadata = generateMetadata({
  title: "Frequently Asked Questions ",
  description:
    "Explore Aussie Electrical Solar Energy's comprehensive FAQ section to find answers to common questions about solar panel systems, installation processes, warranties, savings, and more. Empower yourself with knowledge about sustainable energy solutions tailored for Australian homeowners.",
  url: "/faq",
  keywords: [
    "solar panel system",
    "how does a solar panel system work",
    "solar panel installation duration",
    "solar panel system warranty",
    "savings with solar panels",
    "residential solar systems",
    "company values",
    "roof suitability for solar panels",
    "solar panel financing options",
    "quality assurance of solar panels",
    "lifespan of solar panels",
  ],
});

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
