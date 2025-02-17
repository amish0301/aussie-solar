import React from "react";
import vector from "../../../public/assets/img/vector.png";
import blog4 from "../../../public/assets/img/blog-4.jpg";
import blog5 from "../../../public/assets/img/blog-5.jpg";
import Image from "next/image";
import Link from "next/link";
const RecentNewsSec = () => {
  return (
    <>
      <section className="blog-update gap">
        <div className="container">
          <div className="heading">
            <p>Blog & Updates</p>
            <div className="line"></div>
            <h2>Recent News</h2>
          </div>
          <div className="row">
            <div className="col-lg-6"> 
              <div className="blog-text two">
                <div className="blog-text-two-text">
                  <span>Design Process</span>
                  <Link href="/blog-details">
                    <h4>State of the art solar system designs</h4>
                  </Link>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                  <div className="d-flex flex-wrap">
                    <h6>
                      <Link href="#">December 12, 2023</Link>
                    </h6>
                    <div className="d-flex align-items-center me-4">
                      <Image alt="vector" className="me-2" src={vector} />
                      <span className="pe-0">14 Comment</span>
                    </div>
                  </div>
                </div>
                <div className="blog-img">
                  <figure>
                    <Image alt="img" src={blog4} />
                  </figure>
                </div>
              </div>
              <div className="blog-text two mt-60">
                <div className="blog-text-two-text two">
                  <span>Design Process</span>
                  <Link href="/blog-details">
                    <h4>Fermydd Solar wedi ei gosod</h4>
                  </Link>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                  <div className="d-flex flex-wrap">
                    <h6>
                      <Link href="#">December 12, 2023</Link>
                    </h6>
                    <div className="d-flex align-items-center me-4">
                      <Image alt="vector" className="me-2" src={vector} />
                      <span className="pe-0">14 Comment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-text two mb-80">
                <div className="blog-text-two-text two">
                  <span>Design Process</span>
                  <Link href="/blog-details">
                    <h4>enabling a bigger and better solar</h4>
                  </Link>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                  <div className="d-flex flex-wrap">
                    <h6>
                      <Link href="#">December 12, 2023</Link>
                    </h6>
                    <div className="d-flex align-items-center me-4">
                      <Image alt="vector" className="me-2" src={vector} />
                      <span className="pe-0">14 Comment</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-text two">
                <div className="blog-text-two-text">
                  <span>Design Process</span>
                  <Link href="/blog-details">
                    <h4>Solar energy’s exceptional synergies</h4>
                  </Link>
                  <p>
                    We fully utilise the latest corporate renewable energy
                    technology to generate significant energy.
                  </p>
                  <div className="d-flex flex-wrap">
                    <h6>
                      <Link href="#">December 12, 2023</Link>
                    </h6>
                    <div className="d-flex align-items-center me-4">
                      <Image alt="vector" className="me-2" src={vector} />
                      <span className="pe-0">14 Comment</span>
                    </div>
                  </div>
                </div>
                <div className="blog-img">
                  <figure>
                    <Image alt="img" src={blog5} />
                  </figure>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Link href="/our-blog" className="button m-auto">
                View All News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentNewsSec;
