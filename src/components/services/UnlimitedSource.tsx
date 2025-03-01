import BattaryIconTwo from "@/svg/BattaryIconTwo";
import CommercialSolarEnergyIcon from "@/svg/CommercialSolarEnergyIcon";
import CredentialsIcon from "@/svg/CredentialsIcon";
import ExpertiseIcon from "@/svg/ExpertiseIcon";
import InvestmentIcon from "@/svg/InvestmentIcon";
import TechnologiesIcon from "@/svg/TechnologiesIcon";

const UnlimitedSource = () => {
  return (
    <>
      <section className="section-solar-energy gap">
        <div className="container">
          <div className="heading">
            <p>Our Solar Energy Solutions</p>
            <div className="line"></div>
            <h2>
              Harness Clean Energy, Reduce Costs, and Build a Sustainable Future
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <BattaryIconTwo />
                  </i>
                </div>
                <div>
                  <a href="/services-details/4">
                    <h4>Battery Storage Solutions</h4>
                  </a>
                  <p>
                    Enhance your energy independence with cutting-edge battery
                    storage solutions, ensuring reliable power even during
                    outages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <CommercialSolarEnergyIcon />
                  </i>
                </div>
                <div>
                  <a href="/packages/2">
                    <h4>Commercial solar energy</h4>
                  </a>
                  <p>
                    Optimize your business operations with advanced commercial
                    solar systems, maximizing energy efficiency and cost
                    savings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <InvestmentIcon />
                  </i>
                </div>
                <div>
                  <a href="/contact">
                    <h4>High Return On Investment</h4>
                  </a>
                  <p>
                    We optimize cutting-edge renewable energy solutions to
                    maximize efficiency, profitability, and return on
                    investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <CredentialsIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Boost Green Credentials</h4>
                  </a>
                  <p>
                    Strengthen your sustainability efforts with our eco-friendly
                    solar installations, reducing your carbon footprint and
                    energy expenses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <ExpertiseIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Industry Expertise</h4>
                  </a>
                  <p>
                    Backed by years of experience, our expert team delivers
                    efficient, high-performance solar solutions tailored to your
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5 mb-0">
                <div className="use-energix-icon">
                  <i>
                    <TechnologiesIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Comprehensive Energy Solution</h4>
                  </a>
                  <p>
                    From consultation to installation, we provide end-to-end
                    solar solutions, ensuring maximum savings and sustainability
                    for every customer.
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

export default UnlimitedSource;
