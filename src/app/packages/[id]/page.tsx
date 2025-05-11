import React from "react";
import OurPackagesMain from "@/components/OurPackages/OurPackagesMain";
import { packagesData } from "@/data/package-data";
import Wrapper from "@/layout/DefaultWrapper";
import LetterBox from "@/components/home-two/LetterBox";
import { Metadata } from "next";

interface propType {
  params: { id: string };
}

// create dynamic metadata for pakcage page
export async function generateMetadata({
  params,
}: propType): Promise<Metadata> {

  const metadataBase = new URL(process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000")

  const data = packagesData?.find((item) => item.id === Number(params?.id));

  return {
    metadataBase,
    title: data?.title ?? "Aussie Electrical Solar Energy Packages",
    description: `Discover the benefits of our ${
      data?.title ?? "solar packages"
    } and choose the best one for your needs.`,
    openGraph: {
      title: data?.title ?? "Aussie Electrical Solar Energy Packages",
      description: `Find out about our ${
        data?.title ?? "solar packages"
      } and maximize your energy savings.`,
      images: data?.img
        ? [
            {
              url: new URL(typeof data.img === "string" ? data.img : data.img.src ?? "", metadataBase).toString(),
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title ?? "Aussie Electrical Solar Energy Packages",
      description: `Explore ${
        data?.title ?? "our solar packages"
      } designed for efficiency and sustainability.`,
      images: data?.img
        ? [
            {
              url: new URL(typeof data.img === "string" ? data.img : data.img.src ?? "", metadataBase).toString(),
            },
          ]
        : [],
    },
  };
}

const PackagesPage = ({ params }: propType) => {
  const packageId = Number(params.id);

  if (isNaN(packageId)) return <p>Invalid package ID</p>;

  const data = packagesData.find((item) => item.id === packageId);
  if (!data) return <p>Package Not Found</p>;

  return (
    <>
      <Wrapper>
        <main>
          <OurPackagesMain params={{ id: packageId }} />
          <LetterBox />
        </main>
      </Wrapper>
    </>
  );
};

export default PackagesPage;
