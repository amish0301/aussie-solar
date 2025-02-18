import pricingPlan1 from "../../public/assets/img/savings.svg";
import pricingPlan2 from "../../public/assets/img/savings.svg";
import pricingPlan3 from "../../public/assets/img/savings.svg";
import pricingPlan4 from "../../public/assets/img/savings.svg";
import pricingPlan5 from "../../public/assets/img/savings.svg";
import pricingPlan6 from "../../public/assets/img/savings.svg";
import { pricingPlan } from "@/interFace/interFace";

export const pricingPlanData:pricingPlan[] = [
    {
        id:1,
        title:"6.6kW Solar Panel System",
        originalPrice: 3960,
        price:3250,
        package:"Month",
        img:pricingPlan1,
    },
    {
        id:2,
        title:"10.12kW Solar Panel System",
        price:4950,
        originalPrice: 5690,
        package:"Month",
        img:pricingPlan2,
    },
    {
        id:3,
        title:"13.28kW Solar Panel System",
        price:5950,
        originalPrice: 6790,
        package:"Month",
        img:pricingPlan3,
    },
    {
        id:4,
        title:"Nuclear Energy",
        price:140,
        package:"Month",
        img:pricingPlan4,
    },
    {
        id:5,
        title:"Tidal Energy",
        price:160,
        package:"Month",
        img:pricingPlan5,
    },
    {
        id:6,
        title:"Wave Energy",
        price:210,
        package:"Month",
        img:pricingPlan6,
    },
]