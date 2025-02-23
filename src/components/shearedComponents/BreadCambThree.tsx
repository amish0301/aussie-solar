import { StaticImageData } from "next/image";
import Link from "next/link";
interface propsType {
  title: string;
  pages: string;
  subPage: string;
  redirect?: string;
  bgImg?: StaticImageData;
  tagLine?: string;
}

const BreadCambThree = ({ title, pages, subPage, bgImg, redirect, tagLine }: propsType) => {
  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: bgImg ? `url(${bgImg.src})` : "none" }}
      >
        <div className="container">
          <div className="banner-text">
            <h2>{title}</h2>
            <p>
              {tagLine ?? "Comprehensive Solar Solutions for Every Need - From Installation to Monitoring, We Power Your Future with Excellence."}
            </p>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">
                  <i className="fa-solid fa-house pe-2"></i>Home
                </Link>
              </li>
              <li>
                <Link href={redirect ?? '/'}>{pages}</Link>
              </li>
              <li>{subPage}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCambThree;
