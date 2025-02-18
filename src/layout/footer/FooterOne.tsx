import React from "react";
import bgImg from "../../../public/assets/img/footer.jpg";
import Link from "next/link";
import Logo from "../../../public/assets/img/logo2.png";
import PhoneIcon from "@/svg/PhoneIcon";
import LocationIcon from "@/svg/LocationIcon";
import EmailIcon from "@/svg/EmailIcon";
import Image from "next/image";
const FooterOne = () => {
  return (
    <>
      <footer
        className="gap no-bottom one"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="logo">
                <Link href="/">
                  <Image src={Logo} alt="logo" width={220} />
                </Link>
                <ul className="d-flex social-media">
                  <li>
                    <Link href="https://www.facebook.com/">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle section */}

            {/* Middle Section - Solar Services */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4>Residential Solar</h4>
                <ul>
                  <li>
                    <Link href="/package-details/104">13.2kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/package-details/103">10.12kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/package-details/102">7.92kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/package-details/101">6.6kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/contact">Custom Solution</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section - More Services */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4>Commercial Solar</h4>
                <ul>
                  <li>
                    <Link href="/package-details/204">100kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/package-details/203">50kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/package-details/202">30kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/package-details/201">20kW Solar System</Link>
                  </li>
                  <li>
                    <Link href="/contact">Custom Solution</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-widget">
                <h4>Solar Services</h4>
                <ul>
                  <li>
                    <Link href="/services-details/1">Solar Panel Installation</Link>
                  </li>
                  <li>
                    <Link href="/services-details/2">Solar Panel Cleaning</Link>
                  </li>
                  <li>
                    <Link href="/services-details/4">Solar Batteries</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kangaroo Solar Section */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4>Kangaroo Solar</h4>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Explore Our Gallery</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link href="#">Support</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row contact-footer">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div>
                  <i>
                    <PhoneIcon />
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <Link href="callto:01234525407">
                    <p>01234 525 407 - 01234 525 407</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div>
                  <i>
                    <LocationIcon />
                  </i>
                </div>
                <div>
                  <p>12/7 new town, 245x Town 1214 Street, United State</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info mb-0">
                <div>
                  <i>
                    <EmailIcon />
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <Link href="mailto:info@kangaroosolar.com.au">
                    <p>info@kangaroosolar.com.au</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Ⓒ Copyright Energix 2024. All Right Reserved.</p>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
