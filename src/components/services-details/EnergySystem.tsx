import { FAQItem } from "@/interFace/interFace";
import BattaryIconTwo from "@/svg/BattaryIconTwo";
import InvestmentIcon from "@/svg/InvestmentIcon";
import SolarEnergyTwoIcon from "@/svg/SolarEnergyTwoIcon";
import FAQAccordion from "./FAQAccordion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface propType {
  faqData: FAQItem[];
}

const EnergySystem = ({ faqData }: propType) => {
  return (
    <>
      <section className="clean-energy mt-30">
        <div className="container">
          <h5>Consumer protections</h5>
          <p>
            At Kangaroo Solar, we believe solar should be simple, affordable,
            and great value for money. To ensure you get a top-performing system
            that is value for money, we offer a range of consumer protections on
            our solar products and services.
            <br />
            <br />
            We provide an industry leading 10 year warranty on our installation
            services and workmanship, a 25 year manufacturer&apos;s warranty on
            our products, and a lengthy 25 to 30-year performance warranty on
            all of our solar products.
          </p>

          <h5>Comprehensive Solar Panel Installation by Kangaroo</h5>
          <p className="mb-4">
            At Kangaroo Solar, we specialize in delivering top-notch solar panel
            installation services for residential and commercial spaces. Our
            team of experts ensures a seamless and efficient setup, helping you
            harness the power of the sun to reduce energy costs and promote
            sustainability. With a focus on quality and customer satisfaction,
            Kangaroo Company is your trusted partner in the transition to clean
            energy.
          </p>

          {/* <div className="row">
            <div className="col-lg-6">
              <ul className="custom-listing-stlyes">
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
            </div>
            <div className="col-lg-6">
              <ul className="custom-listing-stlyes">
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
            </div>
            <div className="quote quote-two">
              <div>
                <i>
                  <svg
                    width="67"
                    height="67"
                    viewBox="0 0 67 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.01871 47.1401C9.6425 50.1892 13.4043 51.8008 17.8974 51.8008C26.0439 51.8008 32.6717 45.173 32.6717 37.0265C32.6717 29.1036 26.4031 22.6174 18.5652 22.2671C18.7851 19.49 20.3584 16.8296 20.3755 16.801C20.4943 16.6026 20.4974 16.3556 20.3834 16.1544C20.2695 15.953 20.0559 15.8286 19.8244 15.8286C16.77 15.8286 12.5845 18.153 9.16162 21.7502C5.32403 25.7831 3.12305 30.6487 3.12305 35.0994C3.12305 40.0149 4.47008 44.1784 7.01871 47.1401ZM10.0923 22.6357C12.8206 19.7684 16.1279 17.7179 18.7047 17.2265C18.107 18.4861 17.255 20.6713 17.255 22.8945C17.255 23.2494 17.5425 23.5369 17.8974 23.5369C25.3355 23.5369 31.3869 29.5883 31.3869 37.0265C31.3869 44.4646 25.3355 50.5161 17.8974 50.5161C9.57659 50.5161 4.40777 44.6088 4.40777 35.0994C4.40777 30.975 6.47977 26.4323 10.0923 22.6357ZM48.4737 51.8008C56.6203 51.8008 63.248 45.173 63.248 37.0265C63.248 29.1036 56.9795 22.6174 49.1415 22.2671C49.3616 19.49 50.9348 16.8296 50.9518 16.801C51.0707 16.6026 51.0738 16.3556 50.9598 16.1544C50.8457 15.953 50.6322 15.8286 50.4008 15.8286C47.3464 15.8286 43.1609 18.153 39.738 21.7502C35.9004 25.7831 33.6994 30.6487 33.6994 35.0994C33.6994 40.0149 35.0466 44.1784 37.5951 47.1401C40.2189 50.1892 43.9807 51.8008 48.4737 51.8008ZM40.6687 22.6357C43.397 19.7684 46.7043 17.7179 49.2812 17.2265C48.6834 18.4861 47.8314 20.6713 47.8314 22.8945C47.8314 23.2494 48.119 23.5369 48.4737 23.5369C55.9119 23.5369 61.9633 29.5883 61.9633 37.0265C61.9633 44.4646 55.9119 50.5161 48.4737 50.5161C40.1531 50.5161 34.9842 44.6088 34.9842 35.0994C34.9842 30.975 37.056 26.4323 40.6687 22.6357Z"
                      fill="white"
                    />
                  </svg>
                </i>
              </div>
              <h3>
                “Success is the result of perfection, hard work, learning from
                failure, loyalty, and persistence”
              </h3>
            </div>
          </div> */}

          {/* render FAQ's */}
          <FAQAccordion faqData={faqData} />

          <h5 className="my-5">Clean Energy System</h5>
          <div className="row pb-5">
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <BattaryIconTwo />
                  </i>
                </div>
                <div>
                  <a href="/services-details/4">
                    <h4>Maximize Your Energy Efficiency</h4>
                  </a>
                  <p>
                    Store excess solar energy efficiently, reduce grid reliance,
                    and ensure uninterrupted power supply anytime.
                  </p>
                  <a href={"/services-details/4"} className="button">
                    {" "}
                    Learn More{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        width: "18px",
                        height: "18px",
                        display: "inline",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <SolarEnergyTwoIcon />
                  </i>
                </div>
                <div>
                  <a href="/packages/1">
                    <h4>Commercial Solar Energy</h4>
                  </a>
                  <p>
                    Power your business with cost-effective solar solutions,
                    reducing energy bills and ensuring long-term sustainability.
                  </p>
                  <a href={"/packages/2"} className="button">
                    {" "}
                    Explore Packages{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        width: "18px",
                        height: "18px",
                        display: "inline",
                      }}
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mb-0">
                <div className="use-energix-icon">
                  <i>
                    <InvestmentIcon />
                  </i>
                </div>
                <div>
                  <a href="/contact">
                    <h4>High Return on Investment</h4>
                  </a>
                  <p>
                    Switch to solar for reduced electricity costs, government
                    incentives, and long-term financial sustainability benefits.
                  </p>
                  <a href={"/contact"} className="button">
                    {" "}
                    Get a Free Consultation{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        width: "18px",
                        height: "18px",
                        display: "inline",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnergySystem;
