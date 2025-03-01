import { packagesData } from "@/data/package-data";
import { serviceData } from "@/data/service-data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  // for package data - package type | residential | commercial
  const packageTypeEntries: MetadataRoute.Sitemap = packagesData?.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/packages/${id}`,
  }))

  // for package details - e.g residential > 6.6,13.2 etc
  const packageDataEntries: MetadataRoute.Sitemap = packagesData?.flatMap(pkg => pkg.packages).map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/package-details/${id}`,
    priority: 9
  }))


  // for service details
  const serviceDataEntries: MetadataRoute.Sitemap = serviceData?.map(({id}) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/service-details/${id}`,
    priority: 7
  }));


  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      priority: 10,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/services`,
      priority: 8
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
      priority: 5
    },

    ...packageTypeEntries,

    ...packageDataEntries,

    ...serviceDataEntries,


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