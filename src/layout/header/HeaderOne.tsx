import navMenuData from "@/data/menu/menu-data";
import useGlobalContext from "@/hooks/use-context";
import EmailTwoIcon from "@/svg/EmailTwoIcon";

import PhoneTwoIcon from "@/svg/PhoneTwoIcon";
import SearchIcon from "@/svg/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../../public/assets/img/logo.png";
import MobileMenu from "./MobileMenu";

const HeaderOne = () => {
  const { toggleSideMenu, toggleSearchBar, openLetterBox, setOpenLetterBox } = useGlobalContext();

  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isLaptop, setIsLaptop] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLaptop(window.innerWidth > 1200);
    };

    const handleScroll = () => {
      if (isLaptop && window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Initial check for screen size
    checkScreenSize();

    // Add event listeners
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLaptop]);

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-text">
              <ul className="d-flex">
                {/* <li>
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
                </li> */}
              </ul>
              <div className="d-flex top-bar-mail">
                <div className="d-flex align-items-center  me-4">
                  <i>
                    <EmailTwoIcon />
                  </i>
                  <Link href="mailto:info@kangaroosolar.com.au">
                    <p>info@kangaroosolar.com.au</p>
                  </Link>
                </div>
                <div className="d-flex align-items-center px-3">
                  <i>
                    <PhoneTwoIcon />
                  </i>
                  <Link href="callto:+61-455-505-652"><p>+61-455-505-652</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`menu-bar menu-bar-en ${isSticky ? "sticky" : ""}`}>
            <div className="logo">
              <Link href="/">
                <Image src={Logo} alt="logo" width={140} height={40} />
              </Link>
            </div>
            <nav className="navbar">
              <ul className="navbar-links">
                {navMenuData.map((item) => (
                  <li
                    key={item.id}
                    className={`navbar-dropdown ${
                      item.hasDropdown ? "has-children" : ""
                    }`}
                  >
                    <Link href={item.link} className="menu-item">
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.subMenu && (
                      <ul className="dropdown">
                        {item.subMenu.map((subItem) => (
                          <li
                            key={subItem.id}
                            className={`navbar-dropdown ${
                              subItem.hasDropdown ? "" : ""
                            }`}
                          >
                            <Link href={subItem.link}>
                              {subItem.label}
                              {subItem.hasDropdown && (
                                <i className="fa-solid fa-angle-right"></i>
                              )}
                            </Link>
                            {subItem.hasDropdown && subItem.subMenu && (
                              <ul className="dropdown inner-dropdown">
                                {subItem.subMenu.map((nestedItem) => (
                                  <li key={nestedItem.id}>
                                    <Link
                                      href={nestedItem.link}
                                      // className="menu-item"
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="search-style d-flex align-items-center">
              <button
                type="button"
                onClick={toggleSearchBar}
                className="search-btn"
              >
                <SearchIcon />
              </button>
              <button
                onClick={() => setOpenLetterBox(!openLetterBox)}
                className="header-one-btn newsbox button"
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

export default HeaderOne;
