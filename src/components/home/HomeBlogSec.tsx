import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBlogSec = () => {
  
  return (
    <>
      <section className="blog-update gap no-top">
        <div className="container">
          <div className="heading">
            <p>Blog & Updates</p>
            <div className="line"></div>
            <h2>Recent News</h2>
          </div> 
          <div className="row">
            {blogData?.slice(0,3)?.map((item) => (
              <div key={item?.id} className="col-lg-4 col-md-6">
                <div className="blog-text">
                  <div className="blog-img">
                    <figure>
                      <Image alt="img" src={item?.img} style={{ width: "100%", height: "auto" }}/>
                    </figure>
                    <h6>
                      <Link href="#">{item?.date}</Link>
                    </h6>
                  </div>
                  <span>{item?.designation}</span>
                  <Link href={`/blog-details/${item?.id}`}>
                    <h4> {item?.title} </h4>
                  </Link>
                  <div className="d-flex">
                    <div className="d-flex align-items-center admin">
                      <Image alt="admin" src={item?.adminImg} />
                      <span>{item?.author}</span>
                    </div>
                    <div className="d-flex align-items-center me-4">
                      <Image
                        alt="vector"
                        className="me-2"
                        src={item?.commentLogo}
                      />
                      <span className="pe-0">{item?.comment}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/our-blog" className="button d-table m-auto">
            View All News
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeBlogSec;
