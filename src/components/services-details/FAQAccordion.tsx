"use client";
import { useState } from "react";
import Accordion from "../shearedComponents/Accordion";
import { FAQItem } from "@/interFace/interFace";

interface faqProp {
  faqData: FAQItem[];
}

const FAQAccordion: React.FC<faqProp> = ({ faqData }: faqProp) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="accordion" id="faqAccordion">
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          index={index}
          title={faq.question}
          content={faq.answer}
          activeIndex={activeIndex ?? 0}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
