import Link from "next/link";
import React from "react";

const BlogRightSidebar = () => {
  return (
    <>
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
    </>
  );
};

export default BlogRightSidebar;
