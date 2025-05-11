import React from "react";
import bgImg from "../../../public/assets/img/footer.jpg";
import Link from "next/link";
// import Logo from "../../../public/assets/img/logo2.png";
// import Logo from "../../../public/assets/img/Aussie_logo2.png"
import Logo from "../../../public/assets/img/Aussie_logo.png"
import PhoneIcon from "@/svg/PhoneIcon";
import LocationIcon from "@/svg/LocationIcon";
import EmailIcon from "@/svg/EmailIcon";
import Image from "next/image";
import LocationTwoIcon from "@/svg/LocationTwoIcon";
const FooterOne = () => {
  const year: number = new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date()) as unknown as number;

  return (
    <>
      <footer
        className="gap no-bottom one"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            {/* Logo & About Section */}
            <div className="col-lg-4 col-md-6">
              <div className="logo">
                <Link href="/">
                  <Image src={Logo} alt="logo" width={180} />
                </Link>
                <p>
                  <strong>Powering Australia with Smart Solar Solutions</strong>{" "}
                  - Aussie Electrical Solar Energy revolutionizes energy with
                  high-performance solar, battery storage, and smart solutions,
                  maximizing savings and sustainability for homes and
                  businesses.
                </p>
                <ul className="d-flex social-media">
                  <li>
                    <Link href="https://www.facebook.com/">
                      <i className="fa-brands fa-facebook"></i> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Residential Solar Section */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget about-energix">
                <h4>Residential Solar</h4>
                <div className="line"></div>
                <ul className="footer-link-style">
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/106">19.36kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/104">13.2kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/103">10.12kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/102">7.92kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/101">6.6kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/contact">Custom Solution</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial Solar Section */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget about-energix">
                <h4>Commercial Solar</h4>
                <div className="line"></div>
                <ul className="footer-link-style">
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/204">100kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/203">50kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/202">30kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/package-details/201">20kW Solar System</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/contact">Custom Solution</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solar Services Section */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget about-energix">
                <h4>Solar Services</h4>
                <div className="line"></div>
                <ul className="footer-link-style">
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/services-details/1">Solar Panel Installation</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/services-details/2">Solar Panel Cleaning</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/services-details/4">Solar Batteries</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/services-details/5">Solar Inverters</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/services-details/6">Consumption and Monitoring</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aussie Electrical Solar Energy Section */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget about-energix">
                <h4>Aussie Electrical Solar Energy</h4>
                <div className="line"></div>
                <ul className="footer-link-style">
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/gallery">Explore Our Gallery</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Footer */}
          <div
            className="row contact-footer"
            style={{ justifyContent: "space-between" }}
          >
            <div className="col-lg-3 col-md-6">
              <div className="contact-info">
                <i>
                  <PhoneIcon />
                </i>
                <div>
                  <h4>Phone No:</h4>
                  <Link href="callto:01234525407">
                    <p>01234 525 407</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
              <div className="contact-info">
                <i>
                  <LocationTwoIcon />
                </i>
                <div>
                  <h4>Address :</h4>
                  <p>76 Cherish Drive, Tarneit, VIC - 3029</p>
                </div>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6">
              <div className="contact-info">
                <i>
                  <LocationTwoIcon />
                </i>
                <div>
                  <h4>Address :</h4>
                  <p>2 Fripp Cres, Beverly Hills, NSW 2209</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-info">
                <i>
                  <EmailIcon />
                </i>
                <div>
                  <h4>Email Address:</h4>
                  <Link href="mailto:Jared@aussieelectricalsolarenergy.com.au">
                    <p>Jared@aussieelectricalsolarenergy.com.au</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>
              Ⓒ Copyright Aussie Electrical Solar Energy {year}. All Right
              Reserved.
            </p>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
