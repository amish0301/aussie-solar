import { projectData } from "@/data/project-data";
import { TserviceData } from "@/interFace/interFace";
import ArrowIcon from "@/svg/ArrowIcon";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Sponsors from "../home/Sponsors";
import GetInTouch from "../shearedComponents/GetInTouch";

interface propType {
  packages: TserviceData[];
}

const OurProjectsSce = ({ packages }: propType) => {
  return (
    <>
      <section className="gap our-projects">
        <div className="container">
          <div className="row">
            {packages?.map(
              (item, index) =>
                item.id !== 105 && (
                  <div key={index} className="col-lg-6">
                    <div className="recent-projects-img">
                      <figure>
                        <Image
                          alt="packages"
                          src={item?.img as StaticImageData}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </figure>
                      <div className="recent-projects-text">
                        <Link href={`/package-details/${item?.id}`}>
                          <h5>{item?.title}</h5>
                        </Link>
                        <h6>{item?.kwp}</h6>
                        <span>KW SYSTEM</span>
                        <Link href={item?.href ?? "#"}>
                          <i>
                            <ArrowIcon />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
            )}  
            {/* {packages?.map(
              (item, index) =>
                item.id === 105 && (
                  <div key={index} className="col-lg-12">
                    <div className="recent-projects-img">
                      <Image
                        alt="custom-sol-img"
                        src={item?.img as StaticImageData}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div className="recent-projects-text">
                        <Link href={item?.href ?? "/contact"}>
                          <h5>{item?.title}</h5>
                        </Link>
                        <h6>{item?.kwp}</h6>
                        <p>You can Contact Our Experts for Customize Size based on space at your Place </p>
                        <Link href={item?.href ?? "/"}>
                          <i>
                            <ArrowIcon />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
            )} */}

            {/* Brands Scroller */}
           


            {/* {projectData?.slice(8, 10)?.map((item, index) => (
              <div key={index} className="col-lg-6">
                <div className="recent-projects-img">
                  <figure>
                    <Image
                      alt="recent-projects"
                      src={item?.img}
                      style={{ width: "100%", height: "auto" }}
                    />
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
            ))} */}

            {/* Pagination */}
            {/* <ul className="pagination d-flex justify-content-center pt-3">
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
            </ul> */}
          <GetInTouch />
          <Sponsors />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProjectsSce;
