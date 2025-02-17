import { packagesType } from "@/interFace/interFace";
import residentialBanner from '../../public/assets/img/banners/residential-solar-panel-system.jpg';
import commercialBanner from '../../public/assets/img/banners/commercial-solar-panel-system.jpg';
import img6 from '../../public/assets/img/packages/6.6kW-solar-panel.png'
import img7 from '../../public/assets/img/packages/7.92kw-solar-panel.png'
import img10 from '../../public/assets/img/packages/10kw.webp'
import img13 from '../../public/assets/img/packages/13.2kw.jpg'
import custom_sol from '../../public/assets/img/packages/custom_solution.png'


export const packagesData: packagesType[] = [
    {
        id: 1,
        title: "Residential Packages",
        img: residentialBanner,
        packages: [
            {
                id: 101,
                title: "6.6kW Solar Panel System",
                details: "Residential Package",
                img: img6,
                kwp: "6.6kW",
                href: '/packages/residential-solar'
            },
            {
                id: 102,
                title: "7.92kW Solar Panel System",
                details: "Residential Package",
                img: img7,
                kwp: "7.92kW",
                href: '/packages/residential-solar'
            },
            {
                id: 103,
                title: "10.12kW Solar Panel System",
                details: "Residential Package",
                img: img10,
                kwp: "10.12kW",
                href: '/packages/residential-solar'
            },
            {
                id: 104,
                title: "13.2kW Solar Panel System",
                details: "Residential Package",
                img: img13,
                kwp: "13.2kW",
                href: '/packages/residential-solar'
            },
            {
                id: 105,
                title: "Custom Solution",
                details: "Residential Package",
                img: custom_sol,
                href: '/contact'
            }
        ]
    },

    {
        id: 2,
        title: "Commercial Packages",
        img: commercialBanner,
        packages: [
            {
                id: 201,
                title: "20kW Solar Panel System",
                details: "Commercial Package",
                img: img6,
                kwp: "20kW",
                href: '/packages/commercial-solar'
            },
            {
                id: 202,
                title: "30kW Solar Panel System",
                details: "Commercial Package",
                img: img7,
                kwp: "30kW",
                 href: '/packages/commercial-solar'
            },
            {
                id: 203,
                title: "50kW Solar Panel System",
                details: "Commercial Package",
                img: img10,
                kwp: "50kW",
                 href: '/packages/commercial-solar'
            },
            {
                id: 204,
                title: "100kW Solar Panel System",
                details: "Commercial Package",
                img: img13,
                kwp: "100kW",
                 href: '/packages/commercial-solar'
            },
            {
                id: 105,
                title: "Custom Solution",
                details: "Commercial Package",
                img: custom_sol,
                href: '/contact'
            }
        ]
    }
];
