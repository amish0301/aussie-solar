import Image from "next/image";
import React from "react";
import team1 from "../../../public/assets/img/tame-1.jpg";
import CountUpContent from "@/elements/counter/CountUpContent";
import ExperienceIcon from "@/svg/ExperienceIcon";
import ProjectIcon from "@/svg/ProjectIcon";
import Link from "next/link";
import ProjectIconTwo from "@/svg/ProjectIconTwo";
import PhoneIcon from "@/svg/PhoneIcon";
import LocationIcon from "@/svg/LocationIcon";
import EmailIcon from "@/svg/EmailIcon";
const ExperienceSec = () => {
  return (
    <>
      <section className="gap no-bottom mb-80">
        <div className="container">
          <div className="row mb-80 align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className="about-two-content">
                <div className="d-flex mb-80">
                  <i>
                    <ExperienceIcon />
                  </i>
                  <div>
                    <div className="d-flex">
                      <h2 className="timer count-title count-number">
                        <CountUpContent number={18} text="" />{" "}
                      </h2>
                      <span>+</span>
                    </div>
                    <h6>Years Experience</h6>
                  </div>
                </div>
                <div className="d-flex">
                  <i>
                    <ProjectIconTwo />
                  </i>
                  <div>
                    <div className="d-flex">
                      <h2 className="timer count-title count-number">
                        <CountUpContent number={21} text="" />{" "}
                      </h2>
                      <span>+</span>
                    </div>
                    <h6>Successful Projects</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="team-img">
                <Image alt="team-1" src={team1} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-text">
                <h3>Willimes Jessica</h3>
                <h5>engineer solutions</h5>
                <p>
                  we embody innovation in every photon. As engineers of solar
                  solutions, {` we're`} dedicated to harnessing the boundless
                  power of the sun to illuminate a sustainable future. Our
                  expertise lies not only in designing state-of-the-art solar
                  systems but in crafting bespoke solutions tailored to your
                  specific needs. With a fusion of cutting-edge technology and
                  unwavering commitment, we engineer solutions that transcend
                  mere functionality.
                </p>
                <ul className="d-flex social-media">
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="contact-info team">
                <div>
                  <i>
                    <PhoneIcon />
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <Link href="callto:01234525407">
                    <p>+61485993765 - +61485993765</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="contact-info team">
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
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="contact-info team">
                <div>
                  <i>
                    <EmailIcon />
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <Link href="mailto:username@domainname.com">
                    <p>username@domainname.com</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSec;
