export type Court = {
  id: string;
  name: string;
  area: string;
  categories: string[];
  price: number;
  image: string;
  facilities: string[];
  description: string;
  featured?: boolean;
  address?: string;
  mapQuery?: string;
};

export const COURT_IMAGE_PLACEHOLDER =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0a0a0a"/>
          <stop offset="1" stop-color="#27272a"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#g)"/>
      <g fill="none" stroke="#ffffff" stroke-opacity="0.14">
        <path d="M100 120H1500V880H100z" stroke-width="10"/>
        <circle cx="800" cy="500" r="140" stroke-width="10"/>
        <path d="M800 120V880" stroke-width="6"/>
        <path d="M100 500H1500" stroke-width="6"/>
      </g>
      <text x="100" y="955" fill="#ffffff" fill-opacity="0.65" font-family="Arial, Helvetica, sans-serif" font-size="42">Futsal Finder</text>
      <text x="100" y="80" fill="#ffffff" fill-opacity="0.65" font-family="Arial, Helvetica, sans-serif" font-size="34">Court photo placeholder</text>
    </svg>`
  );

export const courts: Court[] = [
  {
    id: "soweto-futsal-centre",
    name: "Soweto Futsal Centre",
    area: "Soweto",
    categories: ["5-a-side", "Indoor", "League Ready"],
    price: 350,
    image: COURT_IMAGE_PLACEHOLDER,
    facilities: ["Indoor", "Floodlights", "Parking"],
    description: "Professional futsal facility in Soweto.",
    featured: true,
    address: "Soweto, Johannesburg",
    mapQuery: "Soweto Futsal Centre, Soweto, Johannesburg",
  },
  {
    id: "sandton-futsal-arena",
    name: "Sandton Futsal Arena",
    area: "Sandton",
    categories: ["Premium", "Training", "Indoor"],
    price: 450,
    image: COURT_IMAGE_PLACEHOLDER,
    facilities: ["Indoor", "Changing Rooms", "Parking"],
    description: "Premium futsal courts in Sandton.",
    featured: true,
    address: "Sandton, Johannesburg",
    mapQuery: "Sandton Futsal Arena, Sandton, Johannesburg",
  },
  {
    id: "midrand-sports-hub",
    name: "Midrand Sports Hub",
    area: "Midrand",
    categories: ["Outdoor", "Social Games", "Affordable"],
    price: 400,
    image: COURT_IMAGE_PLACEHOLDER,
    facilities: ["Outdoor", "Floodlights"],
    description: "Outdoor futsal experience.",
    address: "Midrand, Johannesburg",
    mapQuery: "Midrand Sports Hub, Midrand, Johannesburg",
  },
];
