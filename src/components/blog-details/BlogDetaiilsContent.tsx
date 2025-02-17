import { TblogData } from "@/interFace/interFace";
import Image, { StaticImageData } from "next/image";
import React from "react";
import videoBg from "../../../public/assets/img/video-2.jpg";
import blogImg from "../../../public/assets/img/blog-details-1.jpg";
import blogImg2 from "../../../public/assets/img/blog-details-2.jpg";
import comment1 from "../../../public/assets/img/comment-1.jpg";
import comment2 from "../../../public/assets/img/comment-2.jpg";
import Link from "next/link";
import BlogCommentForm from "@/forms/BlogCommentForm";
interface propsType {
  data: TblogData;
}
const BlogDetailsContent = ({ data }: propsType) => {
  return (
    <section className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="our-blog-text">
              <div className="our-blog-text-img">
                <figure>
                  <Image alt="img" src={data?.img} />
                </figure>
                <div className="d-flex admin">
                  <Image alt="img" src={data?.authorImg as StaticImageData} />
                  <h5>{data?.author}</h5>
                </div>
              </div>
              <span>{data?.designation}</span>
              <h2>{data?.title}</h2>
              <div className="d-flex">
                <h6>
                  <Link href="#">{data?.date}</Link>
                </h6>
                <div className="d-flex align-items-center me-4">
                  <Image
                    alt="vector"
                    className="me-2"
                    src={data?.commentLogo}
                  />
                  <span className="pe-0">{data?.comment}</span>
                </div>
              </div>
            </div>
            <div className="blog-details-text">
              <p>
                Leading renewable energy solutions provider that is
                revolutionising and redefining the way sustainable energy
                sources are harnessed across the world. Present in 18 countries
                across Asia, Australia, Europe Africa and the Americas, Veztaz
                is powering.
              </p>
              <p>
                Never ever think of giving up. Winners never quit and quitters
                never win. Take all negative words out of your mental dictionary
                and focus on the solutions with utmost conviction and patience.
                The battle is never lost until you’ve abandon your vision. But
                what if you’re really exhausted physically, mentally, and most
                of all emotionally? Here are some sources of motivation to
                prompt you in reaching the peak of accomplishment.
              </p>
              <ul className="custom-listing-stlyes">
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
              </ul>
              <div className="video">
                <figure>
                  <Image
                    alt="img"
                    style={{ width: "100%", height: "auto" }}
                    src={videoBg}
                  />
                </figure>
                <button>
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
                </button>
              </div>
              <h2>
                “Success is the result of perfection, hard work, learning from
                failure, loyalty, and persistence”
              </h2>
              <p className="mt-5">
                Never ever think of giving up. Winners never quit and quitters
                never win. Take all negative words out of your mental dictionary
                and focus on the solutions with utmost conviction and patience.
                The battle is never lost until you’ve abandon your vision. But
                what if you’re really exhausted physically, mentally, and most
                of all emotionally? Here are some sources of motivation to
                prompt you in reaching the peak of accomplishment.
              </p>
              <h4>How Solar Energy is the Solution</h4>
              <p>
                Never ever think of giving up. Winners never quit and quitters
                never win. Take all negative words out of your mental dictionary
                and focus on the solutions with utmost conviction and patience.
                The battle is never lost until you’ve some sources of motivation
                to prompt you in reaching the peak of accomplishment.
              </p>
              <p>
                Global demand for a Circular Economy solution is already high,
                with global concrete manufacturers engaging with us to{" "}
                <b>develop specific testing programmes.</b>
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
                Our immediate goal is to complete the testing phase and achieve
                the certification, which will allow us to bring our product to
                market by the end of the year. We are actively engaging with
                waste to energy operators, concrete manufacturers, and the wider
                construction industry.
              </p>
              <p>
                Global demand for a Circular Economy solution is already high,
                with global concrete manufacturers engaging with us to develop
                specific testing programmes.
              </p>
              <div className="share-this">
                <h6>SHARE THIS:</h6>
                <ul>
                  <li>
                    <Link href="/https://www.facebook.com/">Facebook</Link>
                  </li>
                  <li>
                    <Link href="/https://twitter.com/">Twitter</Link>
                  </li>
                  <li>
                    <Link href="/https://bd.linkedin.com/">LinkedIn</Link>
                  </li>
                </ul>
              </div>
              <div className="comment">
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
              </div>
              <div className="comment leave">
                <h4>Leave a Comment</h4>
                <p>Your email address will not be published.</p>
                 <BlogCommentForm/>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
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
                    <Link href="#">Metal Roofing: The Best for Solar Panels</Link>
                    <span>December 12, 2023</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </li>
              </ul>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
