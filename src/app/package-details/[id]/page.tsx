// "use client"; // Mark the component as a Client Component

import LetterBox from "@/components/home-two/LetterBox";
import PackageDetailsMain from "@/components/package-details/PackageDetailsMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import { packagesData } from "@/data/package-data";
import { TserviceData } from "@/interFace/interFace";
import Wrapper from "@/layout/DefaultWrapper";
import { Metadata } from "next";

// MetaData
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const numericId = Number(params.id);

  const packageData: TserviceData | undefined = packagesData
    .flatMap((category) => category.packages) // Flatten all packages into a single array
    .find((pkg) => pkg.id === numericId); // Find package by id

  return {
    title: packageData?.title ?? "Package Details - Kangaroo Solar",
    description: packageData?.tagLine ?? "Learn more about our solar packages.",
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000"
    ),
    openGraph: {
      title: packageData?.title ?? "Package Details - Kangaroo Solar",
      description:
        packageData?.tagLine ??
        "Discover our cost-effective and high-efficiency solar panel solutions.",
      images: packageData?.img
        ? [
            {
              url:
                typeof packageData.img === "string"
                  ? packageData.img
                  : packageData.img.src ?? "",
            },
          ]
        : [],
    },
  };
}

const PackageDetailsDynamicPage = ({ params }: { params: { id: string } }) => {
  const numericId = Number(params.id);

  return (
    <>
      <Wrapper>
        <main>
          {numericId !== null ? (
            <PackageDetailsMain id={numericId} />
          ) : (
            <p>Loading package details...</p>
          )}
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default PackageDetailsDynamicPage;
