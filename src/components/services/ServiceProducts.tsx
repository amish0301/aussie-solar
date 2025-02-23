import { TServiceProductData } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import Sponsors from "../home/Sponsors";

interface propType {
  data: TServiceProductData;
}

const ServiceProducts = ({ data }: propType) => {


  // fetching brands data
  const brands = data?.brands;

  return (
    <>
      <section className="services gap">
        <div className="container">
          <div className="heading">
            <p>{data?.tagLine ?? "process and the solutions we can provide"}</p>
            <h2>{data?.secondaryTitle}</h2>
            <div className="line"></div>
          </div>

          {data?.secondaryInfo && (
            <div className="row align-items-center mb-5">
              <p>{data.secondaryInfo}</p>
            </div>
          )}

          {/* types are render */}
          {data?.types?.map((item, i) => (
            <div key={i} className="row align-items-center mb-5">
              {i % 2 === 0 ? (
                <>
                  <div className="col-lg-6 col-md-12 order-1">
                    <div className="use-energix three">
                      <div>
                        <h2>{item.title}</h2>
                        <p>{item.details}</p>
                        {item?.btnContent && (
                          <Link
                            href={item?.btnHref ?? "/services"}
                            className="button"
                          >
                            {item?.btnContent ?? "Read More"}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 order-2">
                    <div className="services-img">
                      <figure>
                        <Image alt="img" src={item.img} />
                      </figure>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image on left, Text on right for odd index */}
                  <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                    <div className="services-img">
                      <figure>
                        <Image alt="img" src={item.img} />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                    <div className="use-energix three">
                      <div>
                        <h2>{item.title}</h2>
                        <p>{item.details}</p>
                        {item?.btnContent && (
                          <Link
                            href={item?.btnHref ?? "/services"}
                            className="button"
                          >
                            {item?.btnContent ?? "Read More"}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
          
        {/* pass brands data */}
        <Sponsors brands={brands ?? []} />
      </section>
    </>
  );
};

export default ServiceProducts;
