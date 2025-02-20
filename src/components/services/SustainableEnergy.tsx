import BattaryIconTwo from "@/svg/BattaryIconTwo";
import SolarCleaningIcon from "@/svg/CleaningIcon";
import InverterIcon from "@/svg/InverterIcon";
import PowerIcon from "@/svg/PowerIcon";
import SolarPanelIcon from "@/svg/SolarPanelIcon";
import WifiMonitoring from "@/svg/WifiMonitoring";
import Image from "next/image";
import Link from "next/link";
import serviceFour from "../../../public/assets/img/battery-1.jpeg";
import serviceTwo from "../../../public/assets/img/cleaning-1.jpg";
import serviceOne from "../../../public/assets/img/battery-storage-4.jpeg";
import serviceFive from "../../../public/assets/img/inverter-1.jpeg";
import serviceThree from "../../../public/assets/img/solar-panel.jpeg";
import serviceSix from "../../../public/assets/img/wifi.jpg";

const SustainableEnergy = () => {
  return (
    <>
      <section className="services gap no-bottom">
        <div className="container">
          <div className="heading">
            <p>process and the solutions we can provide</p>
            <div className="line"></div>
            <h2>Smart & sustainable energy consumption</h2>
            <span>
              Powerful & intelligent energy storage solutions,helping you
              maximize your energy potential.
            </span>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <SolarPanelIcon />
                  </i>
                </div>
                <div>
                  <Link href="/services-details/1">
                    <h2>Solar Panel Installation</h2>
                  </Link>
                  <p>
                    Maximize your energy efficiency with our expert solar panel
                    installation services. We provide tailored solutions that
                    harness the sun&#39;s power, reducing your energy bills while
                    promoting sustainability.
                  </p>
                  <Link href="/services-details/1" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="services-img">
                <figure>
                  <Image alt="img" src={serviceOne} />
                </figure>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-md-5 mt-2">
            <div className="col-lg-7">
              <div className="services-img two">
                <figure>
                  <Image alt="img" src={serviceTwo} />
                </figure>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <SolarCleaningIcon />
                  </i>
                </div>
                <div>
                  <Link href="/services-details/2">
                    <h2>Solar Panel Cleaning</h2>
                  </Link>
                  <p>
                    Keep your solar panels operating at peak efficiency with our
                    professional cleaning services. We ensure maximum energy
                    absorption by removing dust, dirt, and debris that hinder
                    performance.
                  </p>
                  <Link href="/services-details/2" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <PowerIcon />
                  </i>
                </div>
                <div>
                  <Link href="/services-details/3">
                    <h2>Solar Panels</h2>
                  </Link>
                  <p>
                    Invest in high-quality, durable solar panels designed for
                    optimal energy conversion. Our advanced solar technology
                    helps you generate clean, renewable power for your home or
                    business.
                  </p>
                  <Link href="/services-details/2" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="services-img">
                <figure>
                  <Image alt="img" src={serviceThree} />
                </figure>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-md-5 mt-2">
            <div className="col-lg-7">
              <div className="services-img two">
                <figure>
                  <Image alt="img" src={serviceFour} />
                </figure>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <BattaryIconTwo />
                  </i>
                </div>
                <div>
                  <Link href="/services-details/4">
                    <h2>Solar Battery</h2>
                  </Link>
                  <p>
                    Store excess solar energy efficiently with our advanced
                    solar batteries. Enjoy uninterrupted power supply, reduce
                    dependency on the grid, and maximize your energy savings.
                  </p>
                  <Link href="/services-details/4" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <InverterIcon />
                  </i>
                </div>
                <div>
                  <Link href="/services-details/5">
                    <h2>Solar Inverter</h2>
                  </Link>
                  <p>
                    Convert solar energy into usable electricity with our
                    high-performance solar inverters. Designed for efficiency
                    and reliability, they ensure a seamless transition to
                    renewable energy.
                  </p>
                  <Link href="/services-details/5" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="services-img">
                <figure>
                  <Image alt="img" src={serviceFive} />
                </figure>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-md-5 mt-2">
            <div className="col-lg-7">
              <div className="services-img two">
                <figure>
                  <Image alt="img" src={serviceSix} loading="eager" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <WifiMonitoring color={"#0b9643"} />
                  </i>
                </div>
                <div>
                  <Link href="/services-details/6">
                    <h2>Wi-Fi Consumption Monitoring</h2>
                  </Link>
                  <p>
                    Take control of your energy usage with our Wi-Fi-based
                    consumption monitoring system. Get real-time insights, track
                    efficiency, and optimize your solar power consumption
                    effortlessly.
                  </p>
                  <Link href="/services-details/6" className="button">
                    Read More
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

export default SustainableEnergy;
