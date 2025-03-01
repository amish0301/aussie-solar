import LetterBox from "@/components/home-two/LetterBox";
import ServiceDetailsMain from "@/components/services-details/ServiceDetailsMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import { serviceData } from "@/data/service-data";
import { serviceProductData } from "@/data/service-product-data";
import Wrapper from "@/layout/DefaultWrapper";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const metadataBase = new URL(
    process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000"
  );

  const data = serviceData?.find((item) => item.id === Number(params?.id));
  const productData = serviceProductData?.find(
    (item) => item.id === Number(params?.id)
  );

  return {
    metadataBase,
    title:
      data?.title ||
      productData?.primaryTitle ||
      "Professional Solar Panel Installation and Energy Solutions",
    description:
      `Explore our comprehensive solar energy services, including ${
        data?.title ?? "solar renewable energy services"
      }, efficient cleaning, advanced battery storage solutions, high-quality inverters, and real-time Wi-Fi energy consumption monitoring.` ||
      productData?.primaryInfo,

    openGraph: {
      title:
        data?.title ||
        productData?.primaryInfo ||
        "Professional Solar Panel Installation and Energy Solutions",
      description:
        `Find out about our ${
          data?.title ?? "solar energy services"
        }, including expert installation, maintenance, and monitoring to maximize your energy savings.` ||
        (productData?.primaryInfo, productData?.secondaryInfo),
      url: new URL(`/services-details/${params.id}`, metadataBase).toString(),
      images:
        data?.img || productData?.img
          ? [
              {
                url: new URL(
                  typeof data?.img === "string"
                    ? data?.img
                    : data?.img?.src ?? "",
                  metadataBase
                ).toString(),
              },
              {
                url: new URL(
                  typeof productData?.img === "string"
                    ? productData?.img
                    : productData?.img?.src ?? "",
                  metadataBase
                ).toString(),
              },
            ]
          : [],
    },
    twitter: {
      card: "summary_large_image",
      title:
        data?.title ||
        productData?.primaryInfo ||
        "Professional Solar Panel Installation and Energy Solutions",
      description:
        `Find out about our ${
          data?.title ?? "solar energy services"
        }, including expert installation, maintenance, and monitoring to maximize your energy savings.` ||
        (productData?.primaryInfo, productData?.secondaryInfo),
      images: data?.img
        ? [
            {
              url: new URL(
                typeof data?.img === "string"
                  ? data?.img
                  : data?.img?.src ?? "",
                metadataBase
              ).toString(),
            },
            {
              url: new URL(
                typeof productData?.img === "string"
                  ? productData?.img
                  : productData?.img?.src ?? "",
                metadataBase
              ).toString(),
            },
          ]
        : [],
    },
  };
}

const ServiceDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <Wrapper>
        <main>
          <ServiceDetailsMain id={id} />
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default ServiceDetailsDynamicPage;
