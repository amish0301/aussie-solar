import navMenuData from "@/data/menu/menu-data";
import useGlobalContext from "@/hooks/use-context";
import EmailTwoIcon from "@/svg/EmailTwoIcon";
import LocationTwoIcon from "@/svg/LocationTwoIcon";

import SearchIcon from "@/svg/SearchIcon";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Logo from "../../../public/assets/img/logo.png";

const HeaderOne = () => {
  const { toggleSideMenu, toggleSearchBar, openLetterBox, setOpenLetterBox } =
    useGlobalContext();

  return (
    <>
      <header>
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
                  <Link href="mailto:info@kangaroosolar.com.au">
                    <p>info@kangaroosolar.com.au</p>
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
          <div className="menu-bar menu-bar-en">
            <div className="logo">
              <Link href="/">
                <Image src={Logo} alt="logo" width={150} height={40} />
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
                              subItem.hasDropdown ? "has-children" : ""
                            }`}
                          >
                            <Link href={subItem.link} className="menu-item">
                              {subItem.label}
                              {subItem.hasDropdown ? (
                                <i className="fas fa-angle-right"></i>
                              ) : null}
                            </Link>
                            {subItem.hasDropdown && subItem.subMenu && (
                              <ul className="dropdown inner-dropdown">
                                {subItem.subMenu.map((nestedItem) => (
                                  <li key={nestedItem.id}>
                                    <Link
                                      href={nestedItem.link}
                                      className="menu-item"
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
