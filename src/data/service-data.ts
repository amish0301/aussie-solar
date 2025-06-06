import { TserviceData } from "@/interFace/interFace";
import sectorImg1 from "../../public/assets/img/banners/solar-panel-installation.jpg";
import sectorImg2 from "../../public/assets/img/banners/solar-panel-cleaning.jpg";
import sectorImg3 from "../../public/assets/img/banners/solar-panel-service-detail.jpg";
import sectorImg4 from "../../public/assets/img/banners/solar-panel-service-detail.jpg";
import sectorImg5 from "../../public/assets/img/banners/solar-panel-service-detail.jpg";
import sectorImg6 from "../../public/assets/img/banners/solar-panel-service-detail.jpg";


export const serviceData: TserviceData[] = [
  {
    id: 1,
    title: "Solar Panel Installation",
    details:
      "We fully utilise the latest corporate renewable energy technology to generate significant energy savings for your business",
    img: sectorImg1,
    tagLine: "Seamless solar panel installation to power your home or business with clean energy.",
    faqData: [
      {
        question: "What is the installation process for solar panels?",
        answer:
          "The installation of solar panels involves a site survey, designing the system based on your energy needs, obtaining necessary permits, and then the physical installation of the panels, inverter, and battery storage (if applicable).",
      },
      {
        question: "How long does the solar panel installation take?",
        answer:
          "Typically, the installation process takes 1-3 days, depending on the system size and complexity of the installation site.",
      },
      {
        question:
          "Are there any government incentives for solar panel installation?",
        answer:
          "Yes, many governments offer incentives, tax credits, or rebates for solar panel installations to promote clean energy adoption. Please check with local authorities or your installer for specific offers.",
      },
      {
        question: "Do I need to prepare my roof before installation?",
        answer:
          "In most cases, your roof needs to be structurally sound. You may need to repair or reinforce it before installation. Your installer will conduct a roof inspection as part of the initial assessment.",
      },
      {
        question: "What warranties come with solar panels?",
        answer:
          "Most solar panels come with a 20-25 year performance warranty, which Warrantys a certain level of efficiency over the years. You should also check for additional warranties on the inverter and other components.",
      },
    ],
  },
  {
    id: 2,
    title: "Solar Panel Cleaning",
    details:
      "We fully utilise the latest corporate renewable energy technology to generate significant energy savings for your business",
    img: sectorImg2,
    tagLine: "Keep your solar panels spotless and maximize efficiency with professional cleaning services.",
    faqData: [
      {
        question: "How often do I need to clean my solar panels?",
        answer:
          "Typically, solar panels need to be cleaned every 6-12 months, depending on dust, dirt, and environmental factors in your area. However, it's advisable to check regularly.",
      },
      {
        question: "Can I clean the panels myself?",
        answer:
          "It’s best to leave the cleaning to professionals to avoid damaging the panels. If you decide to clean them yourself, use soft materials and avoid harsh chemicals.",
      },
      {
        question: "Does cleaning solar panels improve efficiency?",
        answer:
          "Yes, cleaning solar panels can improve their efficiency by ensuring maximum sunlight absorption. Dirt, dust, and bird droppings can reduce the amount of sunlight hitting the panels.",
      },
      {
        question: "What tools are needed for cleaning solar panels?",
        answer:
          "Cleaning solar panels typically requires a soft brush, squeegee, mild soap, and water. Avoid abrasive tools or harsh chemicals that could scratch or damage the surface.",
      },
    ],
  },
  {
    id: 3,
    title: "Solar Panels",
    details:
      "We fully utilise the latest corporate renewable energy technology to generate significant energy savings for your business",
    img: sectorImg3,
    tagLine: "High-performance solar panels designed for maximum energy generation and long-term reliability.",
  },
  {
    id: 4,
    title: "Solar Battery",
    details:
      "We fully utilise the latest corporate renewable energy technology to generate significant energy savings for your business",
    img: sectorImg4,
    tagLine: "Store solar energy efficiently and power your home even when the sun isn't shining.",
    faqData: [
      {
        question: "What is a solar inverter?",
        answer:
          "A solar inverter is a device that converts the direct current (DC) electricity generated by solar panels into alternating current (AC) electricity that can be used in your home or business.",
      },
      {
        question: "How long do solar inverters last?",
        answer:
          "Solar inverters typically last between 10 to 15 years. It's recommended to replace them once their warranty expires or if they show signs of failure.",
      },
      {
        question: "Do I need a battery for my solar system?",
        answer:
          "While batteries are not required for all solar systems, they can store excess energy for later use, making your system more energy-efficient, especially during outages or at night.",
      },
      {
        question: "How much does a solar battery cost?",
        answer:
          "The cost of a solar battery varies depending on the size and brand, but it typically ranges from $5,000 to $15,000 for installation and equipment.",
      },
      {
        question: "Can I install a battery with my existing solar panels?",
        answer:
          "Yes, most systems can be retrofitted with a battery, but it is best to consult with an installer to determine compatibility and the best battery option for your needs.",
      },
    ],
  },
  {
    id: 5,
    title: "Solar Inverter",
    details:
      "We fully utilise the latest corporate renewable energy technology to generate significant energy savings for your business",
    img: sectorImg5,
    tagLine: "Advanced solar inverters that convert sunlight into usable electricity for your home or business.",
    faqData: [
      {
        question: "What is a solar inverter?",
        answer:
          "A solar inverter is a device that converts the direct current (DC) electricity generated by solar panels into alternating current (AC) electricity that can be used in your home or business.",
      },
      {
        question: "How long do solar inverters last?",
        answer:
          "Solar inverters typically last between 10 to 15 years. It's recommended to replace them once their warranty expires or if they show signs of failure.",
      },
      {
        question: "Do I need a battery for my solar system?",
        answer:
          "While batteries are not required for all solar systems, they can store excess energy for later use, making your system more energy-efficient, especially during outages or at night.",
      },
      {
        question: "How much does a solar battery cost?",
        answer:
          "The cost of a solar battery varies depending on the size and brand, but it typically ranges from $5,000 to $15,000 for installation and equipment.",
      },
      {
        question: "Can I install a battery with my existing solar panels?",
        answer:
          "Yes, most systems can be retrofitted with a battery, but it is best to consult with an installer to determine compatibility and the best battery option for your needs.",
      },
    ],
  },
  {
    id: 6,
    title: "Wi-Fi Consumption Monitoring",
    details:
      "Monitor energy output and detect issues early to maintain optimal performance for your solar panels and installation.",
    img: sectorImg6,
    tagLine: "Real-time Wi-Fi monitoring to track solar energy usage and optimize system performance.",
    faqData: [
      {
        question:
          "What are the advantages of Wi-Fi monitoring for solar systems?",
        answer:
          "Wi-Fi monitoring provides real-time insights and early problem detection, ensuring optimal energy production and savings.",
      },
      {
        question: "How does Wi-Fi monitoring optimize solar production?",
        answer:
          "It offers data insights and custom alerts that help boost energy savings and improve system efficiency.",
      },
      {
        question: "What are the risks of not monitoring solar energy systems?",
        answer:
          "Unmonitored systems may suffer from inefficiencies, reduced savings, potential damage, and costly repairs.",
      },
    ],
  },
];
