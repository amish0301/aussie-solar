import { serviceData } from "@/data/service-data";
import { serviceProductData } from "@/data/service-product-data";
import { TServiceProductData, TserviceData, idType } from "@/interFace/interFace";
import LatestInstallations from "../home/LatestInstallations";
import BreadCambThree from "../shearedComponents/BreadCambThree";
import GetInTouch from "../shearedComponents/GetInTouch";
import EnergySystem from "./EnergySystem";
import SolarSystemInfo from "./SolarSystemInfo";
import Thumbnail from "./Thumbnail";

const ServiceDetailsMain = ({ id }: idType) => {
  const data = serviceData?.find((item) => item.id == id);
  const productData = serviceProductData?.find((item) => item.id == id);
  const faqData = data?.faqData;
  const dontShowThumbnail = data?.id == 2 || data?.id == 3 || data?.id == 4 || data?.id == 5;  
  const isWifiMonitoring = data?.id == 6;

  return (
    <>
      <BreadCambThree subPage={data?.title ?? ''} title = "Service Details" pages="Services" bgImg={data?.img} tagLine={data?.tagLine} />
      <SolarSystemInfo data={data as TserviceData} productData={productData as TServiceProductData}/>
      {!dontShowThumbnail && <Thumbnail isWifiMonitoring={isWifiMonitoring} />}
      <EnergySystem faqData={faqData ?? []}/>
      <GetInTouch />
      <LatestInstallations classOne="two" noBottom=""/> 
    </>
  );
};

export default ServiceDetailsMain;
