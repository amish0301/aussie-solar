import { serviceData } from "@/data/service-data";
import { FAQItem, TServiceProductData, TserviceData, idType } from "@/interFace/interFace";
import LatestInstallations from "../home/LatestInstallations";
import BreadCambThree from "../shearedComponents/BreadCambThree";
import EnergySystem from "./EnergySystem";
import SolarSystemInfo from "./SolarSystemInfo";
import Thumbnail from "./Thumbnail";
import GetInTouch from "../shearedComponents/GetInTouch";
import { serviceProductData } from "@/data/service-product-data";

const ServiceDetailsMain = ({ id }: idType) => {
  const data = serviceData?.find((item) => item.id == id);
  const productData = serviceProductData?.find((item) => item.id == id);
  const faqData = data?.faqData;

  return (
    <>
      <BreadCambThree subPage={data?.title ?? ''} title = "Service Details" pages="Services" bgImg={data?.img} />
      <SolarSystemInfo data={data as TserviceData} productData={productData as TServiceProductData}/>
      <Thumbnail />
      <EnergySystem faqData={faqData ?? []}/>
      <GetInTouch />
      <LatestInstallations classOne="two" noBottom=""/> 
    </>
  );
};

export default ServiceDetailsMain;
