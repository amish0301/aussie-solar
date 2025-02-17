"use client";
import useGlobalContext from "@/hooks/use-context";
import EmailTwoIcon from "@/svg/EmailTwoIcon";
import LocationTwoIcon from "@/svg/LocationTwoIcon";
import LogoTwoIcon from "@/svg/LogoTwoIcon";
import SearchIcon from "@/svg/SearchIcon";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const HeaderTwo = () => {
  const { toggleSideMenu, toggleSearchBar, openLetterBox, setOpenLetterBox } =
    useGlobalContext();

  return (
    <>
      <header className="two">
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-text">
              <ul className="d-flex">
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook"></i>facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/">
                    <i className="fa-brands fa-twitter"></i>Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>instagram
                  </Link>
                </li>
              </ul>
              <div className="d-flex top-bar-mail">
                <div className="d-flex align-items-center  me-4">
                  <i>
                    <EmailTwoIcon />
                  </i>
                  <Link href="mailto:nfo@example.com">
                    <p>info@example.com</p>
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <i>
                    <LocationTwoIcon />
                  </i>
                  <p>12/7 new town, 245x Street, United State</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="menu-bar">
            <div className="logo">
              <Link href="/">
                <LogoTwoIcon />
              </Link>
            </div>
            <nav className="navbar">
              <ul className="navbar-links">
                <li className="navbar-dropdown has-children">
                  <Link href="/">home</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/">home 1</Link>
                    </li>
                    <li>
                      <Link href="/home-two">home 2</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar-dropdown">
                  <Link href="about">About</Link>
                </li>
                <li className="navbar-dropdown has-children">
                  <Link href="#">Pages</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="our-projects.html">our projects</Link>
                    </li>
                    <li>
                      <Link href="projects-details.html">projects details</Link>
                    </li>
                    <li>
                      <Link href="team-details.html">team details</Link>
                    </li>
                    <li>
                      <Link href="pricing-plan.html">pricing plan</Link>
                    </li>
                    <li>
                      <Link href="404-error.html">404 error</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar-dropdown">
                  <Link href="services.html">Services</Link>
                </li>
                <li className="navbar-dropdown has-children">
                  <Link href="#">News</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="our-blog.html">our blog</Link>
                    </li>
                    <li>
                      <Link href="blog-details.html">blog details</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar-dropdown">
                  <Link href="/contact">contact</Link>
                </li>
              </ul>
            </nav>
            <div className="search-style d-flex align-items-center">
              <button
                onClick={toggleSearchBar}
                type="button"
                className="search-btn"
              >
                <SearchIcon />
              </button>
              <button
                onClick={() => setOpenLetterBox(!openLetterBox)}
                className="header-button newsbox button"
                type="button"
              >
                Request a Quote
              </button>
            </div>
            <div onClick={toggleSideMenu} className="bar-menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </>
  );
};

export default HeaderTwo;
