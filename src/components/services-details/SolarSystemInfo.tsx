import { TserviceData, TServiceProductData } from "@/interFace/interFace";
import ServiceProducts from "../services/ServiceProducts";
import Image from "next/image";
import battaryStorage from "../../../public/assets/img/installation-3.jpeg";
import battaryStorage2 from "../../../public/assets/img/battery-storage-2.jpg";
import battaryStorage3 from "../../../public/assets/img/battery-storage-3.jpeg";
import battaryStorage4 from "../../../public/assets/cleaning-video.gif";
import Link from "next/link";

// import cleaningVideo from '../../../public/assets/cleaningVideo.webm';

interface propsType {
  data: TserviceData;
  productData: TServiceProductData;
}

const SolarSystemInfo = ({ data, productData }: propsType) => {
  const isServiceProductData =
    data?.id === 3 || data?.id === 4 || data?.id === 5;
  const isSolarPanelCleaning = data?.id === 2;

  return (
    <>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* Flex container for text and image */}
            <div className="d-flex flex-column flex-lg-row align-items-lg-start">
              {/* Text Section */}
              <div className="col-lg-6">
                <div className="solar-system me-lg-4">
                  <span className="d-flex">Kangaroo Solar</span>
                  <h2>{data?.title}</h2>
                  <p>
                    {productData?.primaryInfo ??
                      "At Kangaroo Solar, we have access to a trusted installation network spanning across the entire country. From inner city Sydney through to the suburbs of Brisbane and Adelaide, we can install solar panels quickly and with minimum disruption to your daily schedule. Our team of installers are fully qualified and have experience working in a range of residential and commercial environments."}
                    <br />
                    <br />
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-lg-6">
                <div className="services-img three">
                  <figure className="m-0">
                    <Image src={productData?.img ?? ""} alt="img" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Service Products */}
          {isServiceProductData && (
            <ServiceProducts data={productData as TServiceProductData} />
          )}

          {/* panel gallery */}
          {isSolarPanelCleaning && (
            <div className="row mt-5 service-cleaning">
              <div className="col-xl-6">
                <div className="battery-storage-two">
                  <Image
                    alt="chris-hemsworth"
                    src={battaryStorage}
                    style={{ width: "100%", height: "100%" }}
                  />
                  {/* <div className="battery-storage-text">
                    <Link href="/services">
                      <h3>Battery Storage</h3>
                    </Link>
                    <p>Protecting our environment didn&apos;t cost the earth.</p>
                  </div> */}
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="battery-storage-two">
                      <Image
                        alt="chris-hemsworth"
                        src={battaryStorage2}
                        style={{ height: "325px" }}
                      />
                      {/* <div className="battery-storage-text">
                        <Link href="/services">
                          {" "}
                          <h3>Inverter</h3>
                        </Link>
                        <p>Protecting our environment.</p>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="battery-storage-two">
                      <Image
                        alt="chris-hemsworth"
                        src={battaryStorage3}
                        loading="lazy"
                        style={{ width: "100%", height: "325px" }}
                      />
                      {/* <div className="battery-storage-text">
                        <Link href="/services">
                          <h3>Consumption and Monitoring</h3>
                        </Link>
                        <p>Protecting our environment.</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="battery-storage-two">
                  <Image
                    alt="chris-hemsworth"
                    src={battaryStorage4}
                    style={{ width: "100%" }}
                  />
                  {/* <div className="battery-storage-text">
                    <Link href="/services">
                      <h3>Consumption and Monitoring</h3>
                    </Link>
                    <p>Protecting our environment.</p>
                  </div> */}
                </div>
              </div>
            </div>
          )}


{/* below is general info in all services pages, can be removed */}

          <div className="row align-items-center mt-3">
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
              We believe in solar power and do everything we can to get this wonderful technology into the hands of more people. Along with our reliable products, expert installation services, and advanced consumer protections, we also offer a variety of flexible finance solutions, a 10% price beat Warranty, and no lock-in contracts. If you’re looking for solar panel products and installation you can trust, from one of the biggest names in the country, please give us a call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarSystemInfo;
