//@refresh

import LetterBox from "@/components/home-two/LetterBox";
import HomeMain from "@/components/home/HomeMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import QuotePopup from "@/forms/PopUpHomeQuote";
import Wrapper from "@/layout/DefaultWrapper";
import { generateMetadata } from "@/utils/utils";

export const metadata = generateMetadata({
  title: "Kangaroo Solar - Best Solar Panel Systems in Australia",
  description:
    "Get top-quality solar panel installation, battery storage, and cleaning services. Reduce electricity bills with efficient solar energy solutions. Certified solar experts with top-rated customer service.",
  url: "/",
  keywords: [
    "residential solar systems",
    "commercial solar installation",
    "solar power systems",
    "solar panel maintenance",
    "reduce electricity bill with solar",
    "renewable energy solutions",
    "solar panel cleaning services",
    "Tesla battery storage",
    "sustainable energy solutions",
  ],
  image: [
    "/assets/img/whyus-bg.jpeg",
    "/assets/img/featured-area-3.jpg",
    "/assets/img/featured-area-4.jpg",
    "/assets/img/tesla-battery.jpg",
    "/assets/img/tesla-battery-2.jpg",
    "/assets/img/battery-storage-2.jpg",
    "/assets/img/battery-storage-3.jpeg",
    "/assets/img/battery-storage-4.jpeg",
    "/assets/img/residential-1.jpeg",
    "/assets/img/solar-panels.jpg",
    "/assets/img/battery-storage-5.png",
    "/assets/img/installation-2.jpeg",
    "/assets/img/cleaning-1.jpg",
    "/assets/img/savings.svg",
    "/assets/residential_gif.gif",
    "/assets/img/request-quote.jpg",
  ],
});

const Home = () => {
  return (
    <>
      <Wrapper>
        <main>
          <HomeMain />
          <QuotePopup />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default Home;
