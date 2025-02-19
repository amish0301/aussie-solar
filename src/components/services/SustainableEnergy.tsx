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
import serviceOne from "../../../public/assets/img/installation-1.jpg";
import serviceFive from "../../../public/assets/img/inverter-1.jpeg";
import serviceThree from "../../../public/assets/img/solar-panels.jpg";
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
                    leading renewable energy solutions provider that is sources
                    are harnessed across the world. Present in 18 countries
                    across Asia, Australia, Europe Africa and the Americas,
                    Veztaz is powering.
                  </p>
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
                    leading renewable energy solutions provider that is sources
                    are harnessed across the world. Present in 18 countries
                    across Asia, Australia, Europe Africa and the Americas,
                    Veztaz is powering.
                  </p>
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
                    leading renewable energy solutions provider that is sources
                    are harnessed across the world. Present in 18 countries
                    across Asia, Australia, Europe Africa and the Americas,
                    Veztaz is powering.
                  </p>
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
                    leading renewable energy solutions provider that is sources
                    are harnessed across the world. Present in 18 countries
                    across Asia, Australia, Europe Africa and the Americas,
                    Veztaz is powering.
                  </p>
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
                    leading renewable energy solutions provider that is sources
                    are harnessed across the world. Present in 18 countries
                    across Asia, Australia, Europe Africa and the Americas,
                    Veztaz is powering.
                  </p>
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
                    leading renewable energy solutions provider that is sources
                    are harnessed across the world. Present in 18 countries
                    across Asia, Australia, Europe Africa and the Americas,
                    Veztaz is powering.
                  </p>
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
