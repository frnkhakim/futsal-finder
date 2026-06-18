export type Creche = {
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

export const CRECHE_IMAGE_PLACEHOLDER =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#9bd9ff"/>
          <stop offset="1" stop-color="#f7fbff"/>
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#95db94"/>
          <stop offset="1" stop-color="#6bc46a"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="760" fill="url(#sky)"/>
      <rect y="760" width="1600" height="240" fill="url(#ground)"/>

      <circle cx="1380" cy="170" r="70" fill="#ffd34d"/>
      <g stroke="#ffd34d" stroke-width="12" stroke-linecap="round">
        <path d="M1380 60V20"/>
        <path d="M1380 280V320"/>
        <path d="M1270 170H1230"/>
        <path d="M1490 170H1530"/>
      </g>

      <g>
        <rect x="480" y="340" width="640" height="420" rx="22" fill="#fff8ec" stroke="#dcbf99" stroke-width="8"/>
        <path d="M450 360L800 180L1150 360" fill="#f28e6b"/>
        <rect x="760" y="560" width="90" height="200" rx="8" fill="#b5794f"/>
        <rect x="560" y="430" width="95" height="85" rx="10" fill="#9bd9ff" stroke="#77bfe8" stroke-width="6"/>
        <rect x="700" y="430" width="95" height="85" rx="10" fill="#9bd9ff" stroke="#77bfe8" stroke-width="6"/>
        <rect x="905" y="430" width="95" height="85" rx="10" fill="#9bd9ff" stroke="#77bfe8" stroke-width="6"/>
      </g>

      <g>
        <rect x="250" y="640" width="60" height="120" fill="#8f6d4a"/>
        <circle cx="280" cy="610" r="58" fill="#63bf7a"/>
      </g>
      <g>
        <rect x="1270" y="640" width="60" height="120" fill="#8f6d4a"/>
        <circle cx="1300" cy="610" r="58" fill="#63bf7a"/>
      </g>

      <text x="90" y="935" fill="#2f4f2f" fill-opacity="0.9" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700">Creche Finder</text>
      <text x="90" y="84" fill="#2f4f2f" fill-opacity="0.8" font-family="Arial, Helvetica, sans-serif" font-size="34">Preschool photo placeholder</text>
    </svg>`
  );

export const creches: Creche[] = [
  {
    id: "soweto-little-stars-creche",
    name: "Soweto Little Stars Creche",
    area: "Soweto",
    categories: ["0-2 Years", "Play-Based", "Full Daycare"],
    price: 2800,
    image: CRECHE_IMAGE_PLACEHOLDER,
    facilities: ["Safe Play Area", "Meals Included", "Aftercare"],
    description: "Warm and nurturing creche focused on early childhood development.",
    featured: true,
    address: "Soweto, Johannesburg",
    mapQuery: "Soweto Little Stars Creche, Soweto, Johannesburg",
  },
  {
    id: "sandton-bloom-preschool",
    name: "Sandton Bloom Preschool",
    area: "Sandton",
    categories: ["Montessori", "3-5 Years", "School Readiness"],
    price: 4200,
    image: CRECHE_IMAGE_PLACEHOLDER,
    facilities: ["Qualified Teachers", "Secure Access", "Outdoor Play"],
    description: "Structured preschool programme with a strong focus on school readiness.",
    featured: true,
    address: "Sandton, Johannesburg",
    mapQuery: "Sandton Bloom Preschool, Sandton, Johannesburg",
  },
  {
    id: "midrand-sunshine-daycare",
    name: "Midrand Sunshine Daycare",
    area: "Midrand",
    categories: ["Affordable", "Aftercare", "Mixed Age"],
    price: 2400,
    image: CRECHE_IMAGE_PLACEHOLDER,
    facilities: ["Meals Included", "Nap Room", "Transport Available"],
    description: "Affordable daycare with caring staff and flexible daily routines.",
    address: "Midrand, Johannesburg",
    mapQuery: "Midrand Sunshine Daycare, Midrand, Johannesburg",
  },
];