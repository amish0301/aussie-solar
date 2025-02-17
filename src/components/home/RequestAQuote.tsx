import React from "react";
import bgImg from "../../../public/assets/img/request-quote.jpg";
import HomePageContactForm from "@/forms/HomePageContactForm";
interface propsClass{
  noTop:string
  quoteClass:string;
}
const RequestAQuote = ({noTop,quoteClass}:propsClass) => {
  return (
    <>
      <section className={`gap ${noTop}`}>
        <div className="container">
          <div
            className={`request-quote ${quoteClass}`}
            style={{ backgroundImage: `url(${bgImg.src})` }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="heading">
                  <p>Request A Quote</p>
                  <div className="line"></div>
                  <h2>talk about how we can help you reduce your energy</h2>
                  <h6>
                    costs and successfully manage your carbon emissions with
                    investment free solar technologies.
                  </h6>
                </div>
              </div>
              <div className="col-lg-6">
                <HomePageContactForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestAQuote;
