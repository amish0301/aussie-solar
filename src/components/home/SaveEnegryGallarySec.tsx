import AnalysedIcon from "@/svg/AnalysedIcon";
import BattaryIcon from "@/svg/BattaryIcon";
import InverterIcon from "@/svg/InverterIcon";
import NetWorkIcon from "@/svg/NetWorkIcon";
import PantographsIcon from "@/svg/PantographsIcon";
import RenewAbleEnergy from "@/svg/RenewAbleEnergy";
import Image from "next/image";
// import images
import CountUpContent from "@/elements/counter/CountUpContent";
import WifiMonitoring from "@/svg/WifiMonitoring";
import Link from "next/link";
import battaryStorage from "../../../public/assets/img/tesla-battery-2.jpg";
import battaryStorage2 from "../../../public/assets/img/battery-storage-2.jpg";
import battaryStorage3 from "../../../public/assets/img/battery-storage-3.jpeg";
import battaryStorage4 from "../../../public/assets/img/battery-storage-4.jpeg";

const SaveEnegryGallarySec = () => {
  return (
    <>
      <section className="gap no-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading">
                <p>Welcome to Aussie Electrical Solar Energy Power Save Energy</p>
                <div className="line"></div>
                <h2>Taking the effort out of business energy</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="renewable-group">
                <p>
                  At Aussie Electrical Solar Energys, we are committed to delivering
                  high-quality, reliable, and sustainable solar energy solutions
                  across Australia. With a presence in multiple regions, we take
                  pride in being a trusted name in the solar power industry,
                  helping homeowners and businesses transition to clean,
                  renewable energy.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-6">
              <div className="battery-storage">
                <Image
                  alt="chris-hemsworth"
                  src={battaryStorage}
                  style={{ width: "100%", height: "100%" }}
                />
                <i>
                  <BattaryIcon />
                </i>
                <div className="battery-storage-text">
                  <Link href="/services">
                    <h3>Battery Storage</h3>
                  </Link>
                  <p>Protecting our environment didn&apos;t cost the earth.</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="battery-storage">
                    <Image
                      alt="chris-hemsworth"
                      src={battaryStorage2}
                      style={{ height: "325px" }}
                    />
                    <i>
                      <InverterIcon />
                    </i>
                    <div className="battery-storage-text">
                      <Link href="/services">
                        {" "}
                        <h3>Solar Inverters</h3>
                      </Link>
                      <p>Protecting our environment.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="battery-storage">
                    <Image
                      alt="chris-hemsworth"
                      src={battaryStorage3}
                      style={{ width: "100%", height: "325px" }}
                    />
                    <i>
                      <WifiMonitoring />
                    </i>
                    <div className="battery-storage-text">
                      <Link href="/services">
                        <h3>Consumption and Monitoring</h3>
                      </Link>
                      <p>Protecting our environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="battery-storage two">
                <Image
                  alt="chris-hemsworth"
                  src={battaryStorage4}
                  style={{ width: "100%", height: "714px" }}
                />
                <i>
                  <RenewAbleEnergy />
                </i>
                <div className="battery-storage-text">
                  <Link href="/services">
                    <h3>Solar Panel Installation</h3>
                  </Link>
                  <p>Protecting our environment didn&apos;t cost the earth.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="count-title-text">
            <div className="col-lg-4 col-md-6">
              <i>
                <NetWorkIcon />
              </i>
              <div className="d-flex align-items-center justify-content-center">
                <h2 className="timer count-title count-number">
                  <CountUpContent number={10000000} text="" />
                </h2>
                <span>+</span>
              </div>
              <p>Instances of fault activity captured on LV networks</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <i>
                <PantographsIcon />
              </i>
              <h2 className="timer count-title count-number">
                <CountUpContent number={3500000} text="" />
              </h2>
              <p>Train pantographs inspected annually</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <i>
                <AnalysedIcon />
              </i>
              <div className="d-flex align-items-center justify-content-center">
                <h2 className="timer count-title count-number">
                  <CountUpContent number={20000000} text="" />
                </h2>
                <span>+</span>
              </div>
              <p>Hours of LV circuit load profile data captured and analysed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaveEnegryGallarySec;
