import { blogData } from "@/data/blog-data";
import Image, { StaticImageData } from "next/image";
import React from "react";
import BlogRightSidebar from "./BlogRightSidebar";
import Link from "next/link";

const BlogContentWrapper = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {blogData?.slice(3,8)?.map((item, index) => (
                <div key={index} className="our-blog-text">
                  <div className="our-blog-text-img">
                    <figure>
                      <Image style={{ width: "100%", height: "auto" }} alt="img" src={item?.img} />
                    </figure>
                    <div className="d-flex admin">
                      <Image
                        alt="img"
                        src={item?.authorImg as StaticImageData}
                      />
                      <h5>{item?.author}</h5>
                    </div>
                  </div>
                  <span>{item?.designation}</span>
                  <Link href={`/blog-details/${item?.id}`}>
                    <h2>{item?.title}</h2>
                  </Link>
                  <div className="d-flex">
                    <h6>
                      <Link href="#">{item?.date}</Link>
                    </h6>
                    <div className="d-flex align-items-center">
                      <Image
                        alt="vector"
                        className="me-2"
                        src={item?.commentLogo}
                      />
                      <span className="pe-0">{item?.comment}</span>
                    </div>
                  </div>
                  <p>
                    leading renewable energy solutions provider that is
                    revolutionising and redefining the way sustainable energy
                    sources are harnessed across the world. Present in 18
                    countries across Asia, Australia, Europe Africa and the
                    Americas, Veztaz is powering.
                  </p>
                  <Link className="read-more-btn" href="#">
                    <i className="fa-solid fa-plus"></i>Read More
                  </Link>
                </div>
              ))}

              <ul className="pagination pt-3">
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
            {/* right sidebar */}
            <BlogRightSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContentWrapper;
