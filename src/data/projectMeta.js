// Card art is CC0 stock photography from StockSnap (stocksnap.io), chosen to
// sit quietly behind the existing grayscale + gradient treatment rather than
// compete with the typography. Every image is object-only: no people, faces or
// hands, so nothing reads as staged stock or synthetic. Topic per card:
//   1 product design / prototyping   4 software development / digital systems
//   2 electronics / circuit research 5 strategy / market exploration
//   3 connected devices / IoT         6 leadership / direction
const STOCKSNAP = (id) => `https://cdn.stocksnap.io/img-thumbs/960w/${id}.jpg`;

export const PROJECT_META = [
  {
    id: 1,
    slug: "hardware",
    title: "Product Innovation",
    category: "Product",
    description:
      "Turning real-world problems into practical product ideas and solutions.",
    color: "bg-lime-400",
    img: STOCKSNAP("A0737DFF83"), // Beetle Buggy
  },
  {
    id: 2,
    slug: "iot",
    title: "Hardware Research",
    category: "Hardware",
    description:
      "Exploring hardware systems, electronics, prototyping and working with physical technology.",
    color: "bg-purple-400",
    img: STOCKSNAP("TAY8UPBESM"), // Motherboard Computer
  },
  {
    id: 3,
    slug: "software",
    title: "IoT",
    category: "IoT",
    description:
      "Connecting hardware, software, devices and real-world data to build intelligent systems.",
    color: "bg-orange-400",
    img: STOCKSNAP("92E981EC6F"), // Antenna Satellite
  },
  {
    id: 4,
    slug: "digital-infrastructure",
    title: "Software Planning",
    category: "Software",
    description:
      "Planning digital products, software systems, platforms and user-focused solutions.",
    color: "bg-blue-400",
    img: STOCKSNAP("PN7RVGLUUD"), // Technology Network
  },
  {
    id: 5,
    slug: "data-systems",
    title: "Business",
    category: "Business",
    description:
      "Exploring markets, opportunities, partnerships, strategy and business growth.",
    color: "bg-pink-400",
    img: STOCKSNAP("0KAO4K0U1O"), // Building Skyscraper
  },
  {
    id: 6,
    slug: "automation",
    title: "Leadership",
    category: "Leadership",
    description:
      "Building teams, coordinating people and turning ideas into execution.",
    color: "bg-cyan-400",
    img: STOCKSNAP("5YE5ANA9FM"), // Mountains Peaks
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
