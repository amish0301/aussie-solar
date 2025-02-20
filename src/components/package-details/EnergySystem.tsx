import { packageSizeMap } from "@/data/package-data";
import { TserviceData } from "@/interFace/interFace";
import BattaryIconTwo from "@/svg/BattaryIconTwo";
import InvestmentIcon from "@/svg/InvestmentIcon";
import SolarEnergyTwoIcon from "@/svg/SolarEnergyTwoIcon";
import { useParams } from "next/navigation";
import React from "react";

interface propsType {
  data: TserviceData;
}

const EnergySystem = ({ data }: propsType) => {
  const params = useParams();
  const paramsId = params?.id;

  const packageSize = packageSizeMap[paramsId as keyof typeof packageSizeMap] || "Custom";

  return (
    <>
      <section className="clean-energy mt-60">
        <div className="container">
          {/* Info */}
          <div className="row">
            <div className="col-md-5">
              <h4 className="pb-3">{data?.secondaryTitle1}</h4>
              <p className="font-description">
                Solar power is broadly recognised as a simple and effective way
                to reduce your CO2 emissions and energy bills, but not all solar
                panel systems are equal. Some aren't designed to cope with
                Australia's heat, others don't deliver comparable performance. A
                poorly performing system will limit your sustainability and
                financial return. The best way to protect your investment is to
                select high quality solar products designed for life in
                Australia.
                <br />
                <br />
                Solar panel manufacturers are ranked into three tiers, 1-3. Tier
                1 solar manufacturers gain the top ranking by proving themselves
                to be reliable and stable and they provide the best value
                products on the market. Only a small percentage of solar panels
                manufacturers around the world have achieved the top Tier 1
                ranking. Kangaroo Solar only sells and installs Tier 1 products,
                giving you the peace of mind of receiving quality products that
                will provide the best return on investment.
                <br />
                <br />
                {data?.secondaryInfo1}
              </p>
            </div>
            <div className="col-md-5">
              <h4 className="pb-3">{data?.secondaryTitle2}</h4>
              <p className="font-description">{data?.secondaryInfo2}</p>
            </div>

            <p className="cta-line">
              Call us at <a href="callto:1300-274-737">1300 274 737</a> or{" "}
              <a href="/contact">get a quote</a> today to determine if a{" "}
              {packageSize} solar panel system is the perfect fit for your home
              or business.
            </p>
          </div>

          <h5>Sustainable Energy Systems</h5>
          <p>
            Our cutting-edge clean energy solutions are designed to power homes
            and businesses across Australia with maximum efficiency and
            reliability. By harnessing advanced solar technology, we provide a
            sustainable and cost-effective way to reduce electricity bills while
            minimizing environmental impact. Our expertly engineered systems
            ensure long-term energy independence with minimal maintenance,
            making clean energy more accessible than ever.
          </p>

          {/* Bullet Point Content */}
          <div className="row py-3">
            <div className="col-lg-6">
              <ul className="custom-listing-stlyes">
                <li>
                  <div className="bol"></div>High-performance solar panels with
                  superior energy conversion efficiency.
                </li>
                <li>
                  <div className="bol"></div>Tailored solutions for residential
                  and commercial energy needs.
                </li>
                <li>
                  <div className="bol"></div>Seamless integration with existing
                  power systems for optimal performance.
                </li>
                <li>
                  <div className="bol"></div>Durable and weather-resistant
                  technology built for Australian conditions.
                </li>
                <li>
                  <div className="bol"></div>Government rebates and incentives
                  available to maximize savings.
                </li>
                <li>
                  <div className="bol"></div>Expert installation and ongoing
                  support from our certified professionals.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="custom-listing-stlyes">
                <li>
                  <div className="bol"></div>Advanced monitoring systems for
                  real-time energy tracking.
                </li>
                <li>
                  <div className="bol"></div>Battery storage options for
                  enhanced energy security.
                </li>
                <li>
                  <div className="bol"></div>Eco-friendly power generation with
                  a reduced carbon footprint.
                </li>
                <li>
                  <div className="bol"></div>Future-proof technology that
                  evolves with your energy needs.
                </li>
                <li>
                  <div className="bol"></div>Industry-leading warranties for
                  long-term peace of mind.
                </li>
                <li>
                  <div className="bol"></div>Dedicated Australian support team
                  ensuring exceptional service.
                </li>
              </ul>
            </div>
            <div className="quote quote-two mt-5">
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
                “Success is built on innovation, dedication, and a commitment to
                a sustainable future.”
              </h3>
            </div>
          </div>

          <h5 className="pb-4">Advanced Solar Energy Solutions</h5>
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
                    <h4>Smart Battery Storage</h4>
                  </a>
                  <p>
                  Optimize energy usage with our advanced battery storage solutions, ensuring uninterrupted power supply even at night.
                  </p>
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
                  <a href="/packages/residential-solar">
                    <h4>Commercial & Residential Solar</h4>
                  </a>
                  <p>
                  Harness the power of solar energy for your home or business, reducing electricity costs and contributing to a greener planet.
                  </p>
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
                    <h4>Cost Savings & ROI</h4>
                  </a>
                  <p>
                  Invest in solar and enjoy long-term financial benefits with reduced electricity bills and government incentives.
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

export default EnergySystem;
