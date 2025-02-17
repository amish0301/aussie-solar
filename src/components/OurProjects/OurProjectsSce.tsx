import { projectData } from "@/data/project-data";
import ArrowIcon from "@/svg/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurProjectsSce = () => {
  return (
    <>
      <section className="gap our-projects">
        <div className="container">
          <div className="row">
            {projectData?.slice(3, 7)?.map((item, index) => (
              <div key={index} className="col-lg-6">
                <div className="recent-projects-img">
                  <figure>
                    <Image alt="recent-projects" src={item?.img}  style={{ width: "100%", height: "auto" }} />
                  </figure>
                  <div className="recent-projects-text">
                    <Link href={`/projects-details/${item?.id}`}>
                      <h5>{item?.title}</h5>
                    </Link>
                    <h6>{item?.kwp}</h6>
                    <span>KWP SYSTEM</span>
                    <Link href={`/projects-details/${item?.id}`}>
                      <i>
                        <ArrowIcon />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {projectData?.slice(7, 8)?.map((item, index) => (
              <div key={index} className="col-lg-12">
                <div className="recent-projects-img">
                  <figure>
                    <Image alt="recent-projects" src={item?.img} style={{ width: "100%", height: "auto" }}/>
                  </figure>
                  <div className="recent-projects-text">
                  <Link href={`/projects-details/${item?.id}`}>
                      <h5>{item?.title}</h5>
                    </Link>
                    <h6>{item?.kwp}</h6>
                    <span>KWP SYSTEM</span>
                    <Link href={`/projects-details/${item?.id}`}>
                      <i>
                        <ArrowIcon />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {projectData?.slice(8, 10)?.map((item, index) => (
              <div key={index} className="col-lg-6">
                <div className="recent-projects-img">
                  <figure>
                    <Image alt="recent-projects" src={item?.img} style={{ width: "100%", height: "auto" }}/>
                  </figure>
                  <div className="recent-projects-text">
                  <Link href={`/projects-details/${item?.id}`}>
                      <h5>{item?.title}</h5>
                    </Link>
                    <h6>{item?.kwp}</h6>
                    <span>KWP SYSTEM</span>
                    <Link href={`/projects-details/${item?.id}`}>
                      <i>
                        <ArrowIcon />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <ul className="pagination d-flex justify-content-center pt-3">
              <li className="prev">
                <Link href="#">
                  <i className="fa-solid fa-chevron-left"></i>
                </Link>
              </li>
              <li>
                <Link href="#">1</Link>
              </li>
              <li>
                <Link href="#">2</Link>
              </li>
              <li>
                <Link href="#">3</Link>
              </li>
              <li className="mx-2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
              <li>
                <Link href="#">8</Link>
              </li>
              <li className="prev next">
                <Link href="#">
                  <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProjectsSce;
