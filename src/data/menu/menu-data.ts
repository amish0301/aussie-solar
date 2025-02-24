interface MenuItem {
  id: number;
  label: string;
  link: string;
  lastItem?: string;
  hasDropdown?: boolean;
  subMenu?: MenuItem[];
}

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    hasDropdown: false,
  },
  {
    id: 2,
    hasDropdown: false,
    label: "About",
    link: "/about",
  },
  {
    id: 4,
    hasDropdown: true,
    label: "Services",
    link: "/services",
    subMenu: [
      { id: 4.1, label: "Solar Panels", link: "/services-details/3" },
      { id: 4.2, label: "Solar Batteries", link: "/services-details/4" },
      { id: 4.3, label: "Solar Inverters", link: "/services-details/5" },
      {
        id: 4.4,
        label: "Solar Panel Installation",
        link: "/services-details/1",
      },
      { id: 4.5, label: "Solar Panel Cleaning", link: "/services-details/2" },
      {
        id: 4.6,
        label: "Wi-Fi Consumption Monitoring",
        link: "/services-details/6",
      },
    ],
  },
  {
    id: 5,
    label: "Solar Packages",
    link: "/",
    hasDropdown: true,
    subMenu: [
      {
        id: 5.1,
        label: "Residential Solar",
        link: "/packages/residential-solar",
        hasDropdown: true,
        subMenu: [
          {
            id: 5.2,
            label: "6.6kW Solar System",
            link: "/package-details/101",
          },
          {
            id: 5.3,
            label: "7.92kW Solar System",
            link: "/package-details/102",
          },
          {
            id: 5.4,
            label: "10.12kW Solar System",
            link: "/package-details/103",
          },
          {
            id: 5.5,
            label: "13.2kW Solar System",
            link: "/package-details/104",
          },
          {
            id: 5.6,
            label: "19.36kW Solar System",
            link: "/package-details/105",
          },
          { id: 5.7, label: "Custom Size Solution", link: "/contact" },
        ],
      },
      {
        id: 16,
        label: "Commercial Solar",
        link: "/packages/commercial-solar",
        hasDropdown: true,
        subMenu: [
          {
            id: 16.2,
            label: "20kW Solar System",
            link: "/package-details/201",
          },
          {
            id: 16.3,
            label: "30kW Solar System",
            link: "/package-details/202",
          },
          {
            id: 16.4,
            label: "50kW Solar System",
            link: "/package-details/203",
          },
          {
            id: 16.5,
            label: "100kW Solar System",
            link: "/package-details/204",
          },
          { id: 16.6, label: "Custom Size Solution", link: "/contact" },
        ],
      },
      // { id: 14, label: "our blog", link: "/our-blog" },
      // { id: 15, label: "blog details", link: "/blog-details" },
    ],
  },
  {
    id: 3,
    label: "Kangaroo Solars",
    link: "#",
    hasDropdown: true,
    subMenu: [
      { id: 9, label: "FAQs", link: "/faq" },
      // { id: 10, label: "projects details", link: "/projects-details" },
      // { id: 11, label: "support", link: "/support" },
      { id: 12, label: "Payment", link: "/payment" },
      { id: 14, label: "Gallery", link: "/gallery" },
      { id: 15, label: "Contact Us", link: "/contact" },
    ],
  },
];

export default navMenuData;
