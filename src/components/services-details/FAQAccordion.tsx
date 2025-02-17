"use client"
import { useState } from "react";
import Accordion from "../shearedComponents/Accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What are the advantages of your service?",
      answer:
        "Our service offers sustainable and renewable energy solutions tailored to your needs.",
    },
    {
      question: "How can I get started?",
      answer:
        "Contact us through our website to schedule a consultation and assess your energy requirements.",
    },
    {
      question: "Is there a warranty on your solar panels?",
      answer:
        "Yes, our solar panels come with a 25-year performance warranty for maximum reliability.",
    },
  ];

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
