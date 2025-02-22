import CountUpContent from "@/elements/counter/CountUpContent";
import ExperienceTwoIcon from "@/svg/ExperienceTwoIcon";
import Image from "next/image";
import about1 from "../../../public/assets/img/about-1.jpeg";
import about2 from "../../../public/assets/img/about-2.jpg";
const WellComeToSolarSec = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <p>Welcome to Kangaroo Solar</p>
                <div className="line"></div>
                <h2>Powering a Sustainable Future with Kangaroo Solar</h2>
              </div>
              <div className="renewable-group w-100">
                <p>
                  Founded with a commitment to sustainability and energy
                  efficiency, Kangaroo Solar has become a trusted name in the
                  renewable energy industry. With over a decade of experience,
                  our team of skilled electricians and industry experts
                  specializes in delivering cutting-edge solar solutions for
                  both residential and commercial clients—helping them save
                  money while reducing their environmental impact.
                </p>
                <p>
                  We are dedicated to providing our customers with the maximum
                  rebates available, ensuring they get the best value for their
                  investment. At Kangaroo Solar, we believe in quality over
                  compromise—we always recommend high-quality products that
                  offer superior performance and longevity, never opting for
                  cheap alternatives.
                </p>
                <p>
                  Our expert team ensures seamless, high-quality installations
                  and tailored energy solutions to meet evolving energy needs.
                </p>
                <h3>Join the Green Energy Movement with Kangaroo Solar</h3>
                <p>
                  At Kangaroo Solar, we are leading the charge toward a cleaner,
                  more efficient future. Our comprehensive services empower
                  businesses and households to harness renewable energy
                  effectively. Partner with us and take the next step toward a
                  sustainable tomorrow.
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-img">
                <Image alt="about" src={about1} />
                <Image alt="about" className="img-about" src={about2} />
                <div className="about-two-content">
                  <div className="d-flex">
                    <i>
                      <ExperienceTwoIcon />
                    </i>
                    <div>
                      <div className="d-flex">
                        <h2 className="timer count-title count-number">
                          {" "}
                          <CountUpContent number={8} text="" />{" "}
                        </h2>
                        <span>+</span>
                      </div>
                      <h6>Years Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellComeToSolarSec;
