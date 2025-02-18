import { faqData } from "@/data/faq-data";
import HomePageContactForm from "@/forms/HomePageContactForm";
import FAQAccordion from "../services-details/FAQAccordion";

const FaqMain = () => {
  return (
    <div aria-label="faq-section" className="container mt-4">
      <div className="row">
        {/* FAQ Section - Left Column */}
        <div className="col-12 col-md-7 mb-3">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <FAQAccordion faqData={faqData} />
        </div>

        {/* Contact Section - Right Column (only visible on medium and larger screens) */}
        <div className="col-12 col-md-5 d-none d-md-block">
          <h2 className="mt-4 text-center">Make an Appointment</h2>
          <HomePageContactForm />
        </div>
      </div>
    </div>
  );
};

export default FaqMain;
