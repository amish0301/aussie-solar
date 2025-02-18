import { TtestimonialType } from "@/interFace/interFace";
import clean_certi_logo from "../../public/assets/img/certificates/Clean-Energy-Logo.svg";
import union1 from "../../public/assets/img/certificates/Master_Electrical_Logo.png";
import union2 from "../../public/assets/img/certificates/Smart_Energy_Council_Logo.png";
import union3 from "../../public/assets/img/certificates/Solar_Accreditation_Australia.png";
import union4 from "../../public/assets/img/certificates/tesla.png";
import clientReview from "../../public/assets/img/client-reviews-1.jpg";
import clientReview1 from "../../public/assets/img/client-reviews-2.jpg";
import clientReview2 from "../../public/assets/img/client-reviews-3.jpg";
import clientReview3 from "../../public/assets/img/client-reviews-4.jpg";
import clientReview4 from "../../public/assets/img/client-reviews-5.jpg";

export const testimonialData: TtestimonialType[] = [
  {
    id: 1,
    review:
      "The Clean Energy Council accreditation ensures high industry standards for solar installation, providing confidence in system reliability and performance.",
    name: "Clean Energy Council",
    title: "Certified Solar Installer",
    img: clean_certi_logo,
  },
  {
    id: 2,
    review:
      "Accredited Master Electricians guarantee top-tier electrical workmanship in solar projects, ensuring safety, compliance, and efficiency.",
    name: "Accredited Master Electricians",
    title: "Solar Energy Specialist",
    img: union1,
  },
  {
    id: 5,
    review:
      "Tesla Powerwall revolutionizes energy storage, allowing homeowners to harness solar power efficiently for a sustainable and independent energy future.",
    name: "Tesla Powerwall",
    title: "Energy Storage Expert",
    img: union4,
  },
  {
    id: 3,
    review:
      "The Smart Energy Council promotes innovation in solar and renewable energy solutions, driving a sustainable future with cutting-edge technology.",
    name: "Smart Energy Council",
    title: "Renewable Energy Advocate",
    img: union2,
  },
  {
    id: 4,
    review:
      "Solar Accreditation Australia certifies professionals who meet industry standards for solar panel installation, ensuring high-quality workmanship.",
    name: "Solar Accreditation Australia",
    title: "Certified Solar Technician",
    img: union3,
  },
  {
    id: 6,
    review: `“Provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe, Africa and the Americas.”`,
    name: "Thomas Walkar",
    title: "Sustainable Energy Owner",
    img: clientReview,
  },
  {
    id: 7,
    review: `“Provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe, Africa and the Americas.”`,
    name: "John Doe",
    title: "Business Strategist",
    img: clientReview1,
  },
  {
    id: 8,
    review: `“Provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe, Africa and the Americas.”`,
    name: "Jane Smith",
    title: "Marketing Specialist",
    img: clientReview2,
  },
  {
    id: 9,
    review: `“Provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe, Africa and the Americas.”`,
    name: "Emily Johnson",
    title: "Web Developer",
    img: clientReview3,
  },
  {
    id: 10,
    review: `“Provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe, Africa and the Americas.”`,
    name: "Michael Brown",
    title: "Tech Consultant",
    img: clientReview4,
  },
];
