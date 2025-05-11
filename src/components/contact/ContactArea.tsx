"use client";
import ContactForm from "@/forms/ContactForm";
import EmailIcon from "@/svg/EmailIcon";
import LocationIcon from "@/svg/LocationIcon";
import PhoneIcon from "@/svg/PhoneIcon";
import React from "react";

const ContactArea = () => {
  return (
    <>
      <section className="gap section-contact">
        <div className="container">
          <div className="heading">
            <p>Request A Quote</p>
            <div className="line"></div>
            <h2>talk about how we can help you reduce your energy</h2>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <ContactForm />
            </div>
            <div className="col-lg-4">
              <div className="contact-information">
                <h3>contact information</h3>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                    <PhoneIcon />
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <a href="callto:01234525407">
                    <p>01234 525 407</p>
                  </a>
                </div>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                    <LocationIcon />
                  </i>
                </div>
                <div className="w-100">
                  <div className="d-flex flex-wrap align-items-center">
                    <h4 className="fw-bold me-2 mb-0">Address: </h4>
                    <p className="mb-0">
                      2 Fripp Cres, Beverly Hills, NSW 2209
                    </p>
                  </div>
                  {/* <div className="d-flex flex-wrap align-items-center mt-2">
                    <h4 className="fw-bold me-2 mb-0">Address 2:</h4>
                    <p className="mb-0">
                      76 Cherish Drive, Tarneit, VIC - 3029
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                    <EmailIcon />
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <a href="mailto:Jared@aussieelectricalsolarenergy.com.au">
                    <p>Jared@aussieelectricalsolarenergy.com.au</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
