"use client"
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
               <ContactForm/>
            </div>
            <div className="col-lg-4">
              <div className="contact-information">
                <h3>contact information</h3>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                     <PhoneIcon/>
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <a href="callto:01234525407">
                    <p>01234 525 407 - 01234 525 407</p>
                  </a>
                </div>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                     <LocationIcon/>
                  </i>
                </div>
                <div>
                  <p>12/7 new town, 245x Town 1214 Street, United State</p>
                </div>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                     <EmailIcon/>
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <a href="mailto:username@domainname.com">
                    <p>username@domainname.com</p>
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
