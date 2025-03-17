import { packagesData } from "@/data/package-data";
import { serviceData } from "@/data/service-data";
import { fetchBlogDataFromDB } from "@/utils/siteMapData";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // for package data - package type | residential | commercial
  const packageTypeEntries: MetadataRoute.Sitemap = packagesData?.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/packages/${id}`,
  }))

  // for package details - e.g residential > 6.6,13.2 etc
  const packageDataEntries: MetadataRoute.Sitemap = packagesData?.flatMap(pkg => pkg.packages).map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/package-details/${id}`,
    priority: 0.9
  }))

  // for service details
  const serviceDataEntries: MetadataRoute.Sitemap = serviceData?.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/service-details/${id}`,
    priority: 0.7
  }));

  // for blog data
  const blogDataEntries: MetadataRoute.Sitemap = await fetchBlogDataFromDB();

  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/services`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
      priority: 0.5
    },

    ...packageTypeEntries,

    ...packageDataEntries,

    ...serviceDataEntries,

    ...blogDataEntries,


    // static and secondary routes
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/faq`
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/gallery`
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/payment`
    },
  ];
}