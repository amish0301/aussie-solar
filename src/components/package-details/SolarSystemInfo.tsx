import { TserviceData } from "@/interFace/interFace";

interface propsType {
  data: TserviceData;
}

const SolarSystemInfo = ({ data }: propsType) => {
  return (
    <>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="solar-system">
                <span className="d-flex">
                  Solar Energy Solutions for Homes & Businesses
                </span>
                <h2> {data?.title2} </h2>
                <p>
                  {data?.primaryInfo1}
                  <br />
                  <br />
                  {data?.primaryInfo2}
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="information">
                <li>
                  <span>CLIENT</span>
                  <h6>Residential & Commercial Properties</h6>
                </li>
                <li>
                  <span>TECHNOLOGY</span>
                  <h6>Tier-1 Solar Panels & Inverters</h6>
                </li>
                <li>
                  <span>SYSTEM CAPACITY</span>
                  <h6>{data?.kwp}</h6>
                </li>
                <li>
                  <span>MONITORING</span>
                  <h6>Real-time Wi-Fi Monitoring System</h6>
                </li>
                <li>
                  <span>WARRANTY</span>
                  <h6>25 Years Performance Guarantee</h6>
                </li>
                <li>
                  <span>BATTERY COMPATIBILITY</span>
                  <h6>Supports Battery Storage Integration</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarSystemInfo;
