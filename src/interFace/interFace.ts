import { StaticImageData } from "next/image";
import { LinkProps } from "next/link";
import { title } from "process";
import React from "react";
// context api data type
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  // new

  openLetterBox: boolean;
  setOpenLetterBox: React.Dispatch<React.SetStateAction<boolean>>;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchBox: boolean;
  setopenSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideMenu: () => void;
  toggleSearchBar: () => void;

}

export interface idType {
  id: number;
}
export type NiceSelcetType = {
  id: number;
  option: string;
};

//

export type TblogData = {
  id: number;
  img: StaticImageData;
  date: string;
  designation: string;
  title: string;
  adminImg: StaticImageData;
  author: string;
  comment: string;
  commentLogo: StaticImageData;
  authorImg?: StaticImageData;
  details?:string;
  propsClass?:string;
  propsClassTwo?:string;
};
export type TprojectData = {
  id: number;
  title: string;
  details: string;
  img: StaticImageData;
  kwp?: string;
  // href?: string;
};

export type TserviceData = {
  id: number;
  title: string;
  details: string;
  img?: StaticImageData;
  kwp?: string;
  href?: string;
  faqData?: FAQItem[]
};

export type AccordianPropTypes = {
  title: string,
  content: string,
  index: number,
  activeIndex: number,
  setActiveIndex: (index: number | null) => void,
}

export type TtestimonialType = {
  id: number;
  review: string;
  name: string;
  title: string;
  img: StaticImageData;
};

// pricing plan type
export interface pricingPlan {
  id: number;
  title: string;
  price: number;
  originalPrice?: number,
  package: string;
  img: StaticImageData;
}

export interface packagesType {
  id: number;
  title: string;
  img?: StaticImageData;
  packages: TserviceData[];
}

export interface BreadCrumbDefaultPropType {
  title: string;
  pages: string;
  bgImg?: StaticImageData
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  postCode: string;
  location: string;
  address: string;
  hearAboutUs: string;
  serviceInterest: string;
}
