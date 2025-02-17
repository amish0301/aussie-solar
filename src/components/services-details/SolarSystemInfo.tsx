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
                <span className="d-flex">Kangaroo Solar</span>
                <h2> {data?.title} </h2>
                <p>
                  At Kangaroo Solar, we have access to a trusted installation
                  network spanning across the entire country. From inner city
                  Sydney through to the suburbs of Brisbane and Adelaide, we can
                  install solar panels quickly and with minimum disruption to
                  your daily schedule. Our team of installers are fully
                  qualified and have experience working in a range of
                  residential and commercial environments.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="information">
                <li>
                  <span>SYSTEM SIZE</span>
                  <h6>6.6kW - Custom Segment</h6>
                </li>
                <li>
                  <span>Energy Generation</span>
                  <h6>80,000 kWh / Year</h6>
                </li>
                <li>
                  <span>Carbon Savings</span>
                  <h6>87 Tons / Year</h6>
                </li>
              </ul>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="mb-3">What is a CEC accredited installer?</h2>
              <p>
                The Clean Energy Council is an independent body for the solar
                industry, providing training and accreditation in industry best
                practice standards to produce solar systems that are safe,
                reliable and meet customer expectations. Accreditation with the
                Clean Energy Council recognises individuals who have undertaken
                training to design and install solar, batteries and other
                renewable energy systems.
                <br />
                <br />
                By purchasing a solar panel system for your home or business
                with Kangaroo Solar, you can access a highly qualified,
                professional team that can support you every step of the way.
              </p>
            </div>
            <div className="col-lg-5">
              <h2 className="mb-3">The Kangaroo Solar Difference</h2>
              <p>
              We believe in solar power and do everything we can to get this wonderful technology into the hands of more people. Along with our reliable products, expert installation services, and advanced consumer protections, we also offer a variety of flexible finance solutions, a 10% price beat guarantee, and no lock-in contracts. If you’re looking for solar panel products and installation you can trust, from one of the biggest names in the country, please give us a call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarSystemInfo;
