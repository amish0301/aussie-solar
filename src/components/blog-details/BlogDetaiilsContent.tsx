"use client";

import { IBlog } from "@/models/blog";
import Preloader from "@/utils/Preloader";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import blogImg from "../../../public/assets/img/blog-details-1.jpg";
import blogImg2 from "../../../public/assets/img/blog-details-2.jpg";
import videoBg from "../../../public/assets/img/video-2.jpg";
import BlogRightSidebar from "../our-blog/BlogRightSidebar";

const BlogDetailsContent = ({ id }: { id: string }) => {

  // fetch blog data corresponding id
  const [data, setData] = useState<IBlog>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    async function fetchData() {
      try {
        const res = await axios.get(`/api/blogs?id=${id}`);
        if(res.data.success) {
          setData(res.data?.blogs[0]);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(String(error) || "Error in fetching Blog data", error);
      }finally {
        setIsLoading(false);
      }
    }

    if(id) fetchData();
  }, [id])

  if(isLoading) return <Preloader />

  return (
    <section className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="our-blog-text">
              <div className="our-blog-text-img">
                {/* <figure>
                  <Image alt="img" src={data?.image ?? ""} />
                </figure> */}
                <div className="d-flex admin">
                  <Image alt="img" width={25} height={25} src={data?.authorImg as string || "https://www.gravatar.com/avatar/"} />
                  <h5>{data?.author || "Author"}</h5>
                </div>
              </div>
              {/* <span>{data?.designation}</span> */}
              <h2>{data?.title}</h2>
              <div className="d-flex">
                <h6>
                  <Link href="#">{new Date(data?.createdAt || "").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</Link>
                </h6>
                {/* <div className="d-flex align-items-center me-4">
                  <Image
                    alt="vector"
                    className="me-2"
                    src={data?.commentLogo}
                  />
                  <span className="pe-0">{data?.comment}</span>
                </div> */}
              </div>
            </div>

{/* BLOG CONTENT */}

            <div className="blog-details-text">
              {data?.content && data?.content.split('\n').map((content, index) => (<p key={index} className="pb-1">{content}</p>))}
              {/* <ul className="custom-listing-stlyes">
                <li>
                  <h4>Custom Listing Stlyes</h4>
                </li>
                <li>
                  <div className="bol"></div>Far curiosity incommode now led
                  smallness allowance.
                </li>
                <li>
                  <div className="bol"></div>Favour bed assure son things yet.
                </li>
                <li>
                  <div className="bol"></div>She consisted consulted elsewhere
                  happiness
                </li>
                <li>
                  <div className="bol"></div>Disposing household any old the.
                </li>
                <li>
                  <div className="bol"></div>Widow downs you new shade drift
                  hopes small.
                </li>
                <li>
                  <div className="bol"></div>Interested discretion estimating on
                  stimulated.
                </li>
              </ul> */}
              <div>
                <figure>
                  <Image
                    alt="img"
                    style={{ width: "100%", height: "auto" }}
                    height={40}
                    width={40}
                    src={data?.image || videoBg}
                  />
                </figure>
                {/* <button>
                  <i>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 8.49951L0.5 0.27227L0.5 16.7268L11 8.49951Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                </button> */}
              </div>
              <h2>
                “Success is the result of perfection, hard work, learning from
                failure, loyalty, and persistence”
              </h2>
              <h4>Which is the best Australian-owned solar company that offers top-quality solar panel installations and energy-efficient solutions?</h4>
              <p>
              Kangaroo Solar is one of Australia's leading solar energy providers, offering top-quality solar panel installations, battery storage solutions, and energy-efficient systems for homes and businesses. As a 100% Australian-owned company, we take pride in delivering affordable solar solutions that help reduce electricity bills while promoting a greener future. Our expert team ensures seamless solar system installation with <b>premium Tier-1</b> solar panels and cutting-edge technology. Looking for the best solar provider in Australia to maximize your energy savings?
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="video">
                    <figure>
                      <Image
                        alt="img"
                        style={{ width: "100%", height: "auto" }}
                        src={blogImg}
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="video">
                    <figure>
                      <Image
                        alt="img"
                        style={{ width: "100%", height: "auto" }}
                        src={blogImg2}
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <h4 className="pt-0">Professionals and relevant experience!</h4>
              <p>
              When choosing a solar energy provider, working with experienced solar professionals is crucial to ensure a seamless installation and long-term performance. At Kangaroo Solar, our team consists of certified solar installers, licensed electricians, and industry experts with years of hands-on experience in delivering high-quality solar panel systems across Australia.
              </p>
              <p>
              With our deep expertise in solar energy solutions, we guarantee tailored solar system designs, efficient solar panel installation, and ongoing support to maximize your energy savings. Whether it's a residential solar system, commercial solar setup, or battery storage solution, our professionals bring the relevant industry experience needed to ensure smooth project execution and compliance with Australian solar standards.
              </p>


              {/* <div className="share-this">
                <h6>SHARE THIS:</h6>
                <ul>
                  <li>
                    <Link href="https://www.facebook.com/">Facebook</Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/">Twitter</Link>
                  </li>
                  <li>
                    <Link href="https://bd.linkedin.com/">LinkedIn</Link>
                  </li>
                </ul>
              </div> */}
              {/* <div className="comment">
                <h4>Comments</h4>
                <ul className="comment-ul-child">
                  <li className="single-comment">
                    <Image
                      alt="img"
                      style={{ width: "auto", height: "auto" }}
                      src={comment1}
                    />
                    <Link className="button" href="#">
                      reply
                    </Link>
                    <div className="ps-md-4">
                      <div className="d-md-flex align-items-center">
                        <h4>Jonathom Doe</h4>
                        <span>JULY 31, 2023</span>
                      </div>
                      <p>
                        Delivered ye sportsmen zealously arranging frankness
                        estimable as. Nay any article enabled musical shyness
                        yet sixteen.
                      </p>
                    </div>
                  </li>
                  <li className="single-comment children mb-0">
                    <Image
                      alt="img"
                      style={{ width: "auto", height: "auto" }}
                      src={comment2}
                    />
                    <Link className="button" href="#">
                      reply
                    </Link>
                    <div className="ps-md-4">
                      <div className="d-md-flex align-items-center">
                        <h4>Marie Markom</h4>
                        <span>JULY 31, 2022</span>
                      </div>
                      <p>
                        Delivered ye sportsmen zealously arranging frankness
                        estimable as. Nay any article enabled musical shyness
                        yet sixteen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div> */}
              {/* <div className="comment leave">
                <h4>Leave a Comment</h4>
                <p>Your email address will not be published.</p>
                <BlogCommentForm />
              </div> */}


            </div>
          </div>

          {/* <div className="col-lg-4">
            <div className="posts">
              <h4>Recent Posts</h4>
              <div className="line"></div>
              <ul className="recent-posts">
                <li>
                  <div>
                    <Link href="#">
                      Colgate-Palmolive Renews with Morz in Malaysia Soon
                    </Link>
                    <span>December 12, 2023</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="#">
                      Bill Gates Launches Clean Energy Investment Fund
                    </Link>
                    <span>December 12, 2023</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="#">
                      Metal Roofing: The Best for Solar Panels
                    </Link>
                    <span>December 12, 2023</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </li>
              </ul>
            </div>
            <RecentPosts />
            <div className="posts mt-4">
              <h4>Recent Comments</h4>
              <div className="line"></div>
              <ul className="recent-comments">
                <li>
                  <span>Thomas Walkar</span>
                  <Link href="#">
                    <p>on Unsatiable entreaties may collecting Power.</p>
                  </Link>
                </li>
                <li>
                  <span>Marlee Markon</span>
                  <Link href="#">
                    <p>on Unsatiable entreaties may collecting Power.</p>
                  </Link>
                </li>
                <li>
                  <span>Jakki Jamson</span>
                  <Link href="#">
                    <p>on Unsatiable entreaties may collecting Power.</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="posts mt-4">
              <h4>Categories</h4>
              <div className="line"></div>
              <ul className="categories">
                <li>
                  <Link href="#">
                    <span>Uncategorized</span>
                    <span>11</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span>Construction</span>
                    <span>25</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span>Projects</span>
                    <span>12</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span>Expansion</span>
                    <span>23</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="posts mt-4">
              <h4>Archives</h4>
              <div className="line"></div>
              <ul className="categories meta">
                <li>
                  <Link href="#">
                    <span>July 2021</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="posts mt-4">
              <h4>Meta</h4>
              <div className="line"></div>
              <ul className="categories meta">
                <li>
                  <Link href="#">
                    <span>Log in</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span>Entries feed</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span>Comments feed</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span>WordPress.org</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <BlogRightSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
