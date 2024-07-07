export const navLinks: { path: string; label: string }[] = [
  { path: "#about", label: "About Me" },
  { path: "#skill", label: "Skills" },
  { path: "#project", label: "Projects" },
];

export const bio: { name: string; value: string }[] = [
  { name: "Fullname", value: "Hanantyo Dian Utomo" },
  { name: "Date of Birth", value: "August 2nd, 1999" },
  { name: "Address", value: "Bekasi, West Java Province, Indonesia" },
  { name: "Zip-code", value: "17136" },
];

export const edu: { place: string; date: string; desc: string }[] = [
  {
    place: "Purwadhika Digital School",
    date: "Feb 2024 - Aug 2024",
    desc: "Full-Stack Web Developer Class",
  },
  {
    place: "Universitas Gadjah Mada",
    date: "Aug 2016 - Sep 2020",
    desc: "Bachelor of Engineering in Mechanical Engineering, Concentration: Energy Conversion",
  },
  {
    place: "SMAN 81 Jakarta Timur",
    date: "Jul 2014 - Jul 2014",
    desc: "Natural Science, Acceleration Program",
  },
];

export const work: { place: string; pos: string; date: string; loc: string }[] =
  [
    {
      place: "PT. Elsewedy Electric Indonesia",
      pos: "Jr. Quality Engineer - Metal Parts",
      date: "Dec 2022 - Feb 2024",
      loc: "Bogor",
    },
    {
      place: "PT. Ohgishi Indonesia",
      pos: "Production Planning & Inventory Control Staff",
      date: "Jul 2021 - Dec 2022",
      loc: "Bekasi",
    },
  ];

export const organization: {
  team: string;
  pos: string;
  date: string;
  loc: string;
}[] = [
  {
    team: "KKN Natuna Mendunia (UGM Community Service)",
    pos: "Project Leader, Equipment Coordinator",
    date: "Jun 2019 - Aug 2019",
    loc: "Natuna, Kep.Riau",
  },
  {
    team: "Automotive Car Team SEMAR UGM",
    pos: "Head of Electrical Engine Division",
    date: "Apr 2017 - Jun 2019",
    loc: "Yogyakarta",
  },
];

export interface Images {
  id: number;
  image: string;
}

export const llamsImages: Images[] = [
  { id: 1, image: "/assets/llams-1.png" },
  { id: 2, image: "/assets/llams-2.png" },
  { id: 3, image: "/assets/llams-3.png" },
];

export const comproImages = [
  { id: 1, image: "/assets/poly-1.png" },
  { id: 2, image: "/assets/poly-2.png" },
  { id: 3, image: "/assets/poly-3.png" },
  { id: 4, image: "/assets/poly-4.png" },
  { id: 5, image: "/assets/poly-5.png" },
];
