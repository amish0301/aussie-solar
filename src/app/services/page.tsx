import LetterBox from "@/components/home-two/LetterBox";
import ServiceMain from "@/components/services/ServiceMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import { generateMetadata } from "@/utils/utils";
import React from "react";

// Metadata
export const metadata = generateMetadata({
  title: "Comprehensive Solar Energy Services in Australia | Installation, Maintenance & Monitoring",
  description:
    "Explore our wide range of solar energy services across Australia, including professional solar panel installation, efficient cleaning, advanced Wi-Fi consumption monitoring, and reliable battery and inverter solutions. Our team of certified experts is dedicated to providing sustainable and cost-effective renewable energy solutions tailored to your residential or commercial needs.",
  url: "/services",
  image: [
    "/assets/img/banners/solar-panel-services.jpg",
    "/assets/img/battery-storage-5.png",
    "/assets/img/cleaning-1.jpg",
    "/assets/img/battery-storage-4.jpeg",
    "/assets/img/solar-inverter.jpeg",
    "/assets/img/solar-panel.jpeg",
    "/assets/img/WiFi-monitoring-service-main.png",
    "/assets/img/savings.svg",
    "/assets/residential_gif.gif"
  ],
  keywords: [
    "solar panel installation",
    "solar energy services",
    "solar battery storage",
    "solar panel cleaning services",
    "solar battery",
    "solar inverters",
    "solar energy monitoring systems",
    "solar energy rebates Australia",
  ]
  
});

const page = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ServiceMain />
          <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default page;
