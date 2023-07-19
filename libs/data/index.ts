import TICKETS from "@/public/ticket-icon-2.png";
import HAPPYCUSTOMER from "@/public/man-icon.png";
import ROUTES from "@/public/bd-icon.png";
import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import {
  BusMockDataType,
  FactsDataTypes,
  MockDataType,
  PopularBusRouteDataType,
  navlinkDataType,
} from "../types";
import { SomeFactsProps } from "../interfaces";

export const mockdata: BusMockDataType[] = [
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
];

export const navlinkData: navlinkDataType[] = [
  {
    href: "home",
    label: "Home",
  },
  {
    href: "about",
    label: "About Us",
  },
  {
    href: "buss",
    label: "Buss",
  },
  {
    href: "contsct",
    label: "Contact Us",
  },
  {
    href: "offers",
    label: "Offers",
  },
];
export const busRouteData: string[] = [
  "DHAKA-COX'S BAZAR",
  "DHAKA-KHAGRACHARI",
  "DHAKA-BANDARBAN",
  "DHAKA-TEKNAF",
  "DHAKA-RANGAMATI",
  "DHAKA-CHAPAINAWABGANJ",
  "DHAKA-RAJSHAHI",
  "DHAKA-RANGPUR",
  "DHAKA-BARISAL",
  "DHAKA-BARGUNA",
  "DHAKA-KUAKATA",
  "DHAKA-SATKHIRA",
  "DHAKA-KHULNA",
  "DHAKA-PATUAKHALI",
  "DHAKA-THAKURGAON",
  "DHAKA-CHITTAGONG",
  "DHAKA-SHYAMNAGAR",
  "DHAKA-KANSAT",
  "DHAKA-KAPTAI",
  "DHAKA-BENAPOLE",
  "CHAPAINAWABGANJ-DHAKA",
  "DHAKA-PATHORGHATA",
  "DHAKA-KOLKATA",
  "DHAKA-PANCHAGARH",
  "DHAKA-VANDARIA",
  "DHAKA-KHEPUPARA",
  "DHAKA-PAIKGASA",
  "DHAKA-BURIMARI",
  "DHAKA-TANGAIL",
  "DHAKA-PABNA",
  "DHAKA-DINAJPUR",
  "DHAKA-SYLHET",
];

export const someFactsData: FactsDataTypes[] = [
  {
    icon: TICKETS,
    dataNumber: 75000,
    desc: "TICKETS AVAILABLE PER DAY",
  },
  {
    icon: HAPPYCUSTOMER,
    dataNumber: 100000,
    desc: "HAPPY CUSTOMERS",
  },
  {
    icon: ROUTES,
    dataNumber: 60,
    desc: "ROUTE COVERED",
  },
];
