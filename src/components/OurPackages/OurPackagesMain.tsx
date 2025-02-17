import React from "react";
import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import OurPackagesSce from "./OurPackagesSce";
import { packagesData } from "@/data/package-data";

interface propType { id: number };

const OurPackagesMain = ({ id }: propType) => {
  // extract what type of packages we're passing, e.g: residential/commercial
  const data = packagesData?.find((item) => item.id === id);
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
