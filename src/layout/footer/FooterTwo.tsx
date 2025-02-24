import EmailTwoIcon from "@/svg/EmailTwoIcon";
import LocationTwoIcon from "@/svg/LocationTwoIcon";
import PhoneTwoIcon from "@/svg/PhoneTwoIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import bgImg from "../../../public/assets/img/footer.jpg";
import Logo from "../../../public/assets/img/logo2.png";
const FooterTwo = () => {
  const year: number = new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date()) as unknown as number;

  const pathName = usePathname();
  return (
    <>
      <footer
        className="gap no-bottom one"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="logo">
                <Link href="/">
                  <Image src={Logo} alt="logo" width={220} />
                </Link>
                <p>
                  <strong>Powering Australia with Smart Solar Solutions</strong>{" "}
                  - Kangaroo Solar revolutionizes energy with high-performance
                  solar, battery storage, and smart solutions, maximizing
                  savings and sustainability for homes and businesses.
                </p>
                <ul className="d-flex social-media">
                  <li>
                    <Link href="https://www.facebook.com/">
                      <i className="fa-brands fa-facebook"></i>facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-energix">
                <h6>Contact Information</h6>
                <div className="line"></div>
                <div className="d-flex align-items-center top-bar-mail">
                  <div className="d-flex align-items-center">
                    <i>
                      <PhoneTwoIcon />
                    </i>
                    <Link href="callto:01234525407">
                      <p>01234 525 407</p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center top-bar-mail">
                  <div className="d-flex align-items-center">
                    <i>
                      <EmailTwoIcon />
                    </i>
                    <Link href="mailto:info@kangaroosolar.com.au">
                      <p>info@kangaroosolar.com.au</p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex top-bar-mail align-items-center mb-0">
                  <i>
                    <LocationTwoIcon />
                  </i>
                  <div>
                    <p>76 Cherish Drive, Tarneit, VIC - 3029</p>
                    <p>2 Fripp Cres, Beverly Hills, NSW 2209</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="about-energix">
                <h6>Useful Links</h6>
                <div className="line"></div>
                <ul className="link-style">
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/gallery">Image Gallery </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/about">About Us </a>
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/contact">Contact Us </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="about-energix">
                <h6>Solar Packages</h6>
                <div className="line"></div>
                <ul className="link-style">
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/packages/residential-solar">
                      Residential Package
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="/packages/commercial-solar">Commercial Package</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {pathName === "/contact" || (
            <div className="row contact-footer">
              <div className="col-lg-12">
                <div className="contact-info two">
                  <div className="d-flex align-items-center">
                    <i>
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.833252 10.7083C0.488074 10.7083 0.208252 10.9881 0.208252 11.3333C0.208252 11.6785 0.488074 11.9583 0.833252 11.9583H3.33325C3.67843 11.9583 3.95825 11.6785 3.95825 11.3333C3.95825 10.9881 3.67843 10.7083 3.33325 10.7083H0.833252Z"
                          fill="white"
                        ></path>
                        <path
                          d="M0.833252 13.2083C0.488074 13.2083 0.208252 13.4881 0.208252 13.8333C0.208252 14.1785 0.488074 14.4583 0.833252 14.4583H5.83325C6.17843 14.4583 6.45825 14.1785 6.45825 13.8333C6.45825 13.4881 6.17843 13.2083 5.83325 13.2083H0.833252Z"
                          fill="white"
                        ></path>
                        <path
                          d="M2.59071 2.24172L2.5 2.16667C2.757 1.81294 3.0305 1.55276 3.38422 1.29576C4.4795 0.5 6.04189 0.5 9.16667 0.5H10.8333C13.9581 0.5 15.5205 0.5 16.6157 1.29576C16.9695 1.55276 17.2214 1.78443 17.4784 2.13816L17.3737 2.24225L15.4505 4.16551C14.0491 5.56689 13.0416 6.5725 12.1726 7.23558C11.318 7.88758 10.6712 8.14908 9.99992 8.14908C9.3285 8.14908 8.68175 7.88758 7.82717 7.23558C6.95817 6.5725 5.95066 5.56689 4.54927 4.16551L2.92989 2.54612L2.59071 2.24172Z"
                          fill="white"
                        ></path>
                        <path
                          d="M1.6665 8.00002C1.6665 5.80009 1.6665 4.37457 1.94419 3.34125L2.06971 3.45391L3.69904 5.08322C5.05926 6.44344 6.12525 7.50944 7.06879 8.22936C8.03456 8.96619 8.94517 9.39911 9.99975 9.39911C11.0543 9.39911 11.9649 8.96619 12.9307 8.22936C13.8742 7.50944 14.9402 6.44344 16.3004 5.08324L18.0527 3.33093C18.3332 4.36507 18.3332 5.79277 18.3332 8.00002C18.3332 11.1248 18.3332 12.6872 17.5374 13.7824C17.2804 14.1362 16.9693 14.4473 16.6156 14.7043C15.5203 15.5 13.9579 15.5 10.8332 15.5H9.1665C7.9762 15.5 7.0126 15.5 6.21518 15.456C6.95154 15.2834 7.49984 14.6224 7.49984 13.8334C7.49984 12.9129 6.75365 12.1667 5.83317 12.1667H4.77687C4.91868 11.9215 4.99984 11.6369 4.99984 11.3334C4.99984 10.4129 4.25365 9.66669 3.33317 9.66669H1.67251C1.6665 9.16577 1.6665 8.61294 1.6665 8.00002Z"
                          fill="white"
                        ></path>
                      </svg>
                    </i>
                    <h3>Subscribe to our newsletter.</h3>
                  </div>
                  <form>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email address..."
                    />
                    <button className="button">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          <div className="footer-bottom">
            <p>Ⓒ Copyright Kangaroo Solar {year}. All Right Reserved.</p>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
