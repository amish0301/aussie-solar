import { packagesData } from "@/data/package-data";
import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import OurPackagesSce from "./OurPackagesSce";

interface propType {
  params: { id: number };
}

const OurPackagesMain = ({ params }: propType) => {
  // extract what type of packages we're passing, e.g: residential/commercial
  const data = packagesData.find((item) => item.id === params?.id);

  if (!data) return <p>Package Not found</p>;

  return (
    <>
      <BreadCambDefault
        pages="Solar Packages"
        title={data?.title ?? "Our Packages"}
        bgImg={data?.img}
      />
      <OurPackagesSce packages={data?.packages ?? []} />
    </>
  );
};

export default OurPackagesMain;
