export interface Competition {
  year: string;
  name: string;
  medal?: "gold" | "silver" | "bronze" | "none";
}

export interface Participation {
  year: string;
  name: string;
}

export interface AthleteProfile {
  slug: string;
  name: string;
  image: string;
  sport: string;
  location: string;
  level: string;
  gold: number;
  silver: number;
  bronze: number;
  biography: string;
  competitions?: Competition[];
  participations?: Participation[];
}

export const athleteProfiles: AthleteProfile[] = [
  {
    slug: "wanning-tariang",
    name: "Wanning Tariang",
    image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098867_rank2.jpg",
    sport: "Archery",
    location: "Shillong, Meghalaya",
    level: "International",
    gold: 10,
    silver: 5,
    bronze: 18,
    biography:
      "Wanning Tariang is one of Meghalaya's most promising archers, known for consistent performances in state and national championships. Her disciplined training and precise shooting under pressure have made her a role model for young athletes in the state.",
    competitions: [
      { year: "2023", name: "World Archery Championship", medal: "gold" },
      { year: "2022", name: "Asian Archery Cup", medal: "bronze" },
      { year: "2021", name: "National Archery Championship", medal: "gold" },
      { year: "2020", name: "Grand Archery Nationals", medal: "silver" },
      { year: "2019", name: "Northeast Archery Meet", medal: "gold" }
    ],
    participations: [
      { year: "2018", name: "Continental Archery Challenge" },
      { year: "2017", name: "Regional Archery Trials" },
      { year: "2016", name: "Local Archery League" },
      { year: "2015", name: "State Archery Meet" },
      { year: "2014", name: "Youth Archery Cup" }
    ]
  },
  {
    slug: "linestar-lyngkhoi",
    name: "Linestar Lyngkhoi",
    image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098872_rank1.jpg",
    sport: "Athletics",
    location: "Jowai, Meghalaya",
    level: "State",
    gold: 16,
    silver: 24,
    bronze: 5,
    biography:
      "Linestar Lyngkhoi has represented Meghalaya in multiple track and field events and is recognized for his endurance and race strategy. He continues to inspire upcoming runners through his dedication, sportsmanship, and steady medal-winning record.",
    competitions: [
      { year: "2022", name: "State Athletics Championship", medal: "gold" },
      { year: "2021", name: "Meghalaya National Games", medal: "silver" },
      { year: "2020", name: "Northeast Track & Field Meet", medal: "gold" },
      { year: "2019", name: "National Athletics Cup", medal: "silver" },
      { year: "2018", name: "East Zone Athletics Championship", medal: "bronze" }
    ],
    participations: [
      { year: "2017", name: "District Athletics Trials" },
      { year: "2016", name: "Local Track Meet" },
      { year: "2015", name: "School Games Federation Meet" },
      { year: "2014", name: "Youth Sports Festival" },
      { year: "2013", name: "Grassroots Talent Hunt" }
    ]
  },
  {
    slug: "laldanpuii-puruksaii",
    name: "Laldanpuii Puruksaii",
    image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098875_rank3.jpg",
    sport: "Boxing",
    location: "Shillong, Meghalaya",
    level: "National",
    gold: 4,
    silver: 15,
    bronze: 6,
    biography:
      "Laldanpuii Puruksaii is a competitive boxer from Meghalaya with a strong technical foundation and resilient ring presence. Her achievements at state and national circuits highlight her commitment to raising the profile of women's boxing in the region.",
    competitions: [
      { year: "2023", name: "National Boxing Championship", medal: "silver" },
      { year: "2022", name: "Federation Cup Boxing", medal: "bronze" },
      { year: "2021", name: "Elite Women National Boxing", medal: "silver" },
      { year: "2020", name: "Northeast Boxing Championship", medal: "gold" },
      { year: "2019", name: "Khelo India Youth Games", medal: "silver" }
    ],
    participations: [
      { year: "2018", name: "State Boxing Championship" },
      { year: "2017", name: "District Boxing Selection" },
      { year: "2016", name: "East India Boxing Trials" },
      { year: "2015", name: "Sub-Junior Nationals" },
      { year: "2014", name: "Regional Boxing Club Meet" }
    ]
  },
  {
    slug: "ugeneson-lyngdoh",
    name: "Ugeneson Lyngdoh",
    image: "/images/athlete-directory/four.jpeg",
    sport: "Football",
    location: "Tura, Meghalaya",
    level: "International",
    gold: 7,
    silver: 6,
    bronze: 4,
    biography:
      "Ugeneson Lyngdoh is a footballer known for his speed and tactical awareness on the field. He has contributed to multiple inter-district and state-level campaigns, helping strengthen Meghalaya's football pipeline.",
    competitions: [
      { year: "2023", name: "South Asian Football Cup", medal: "gold" },
      { year: "2022", name: "Durand Cup", medal: "silver" },
      { year: "2021", name: "Santosh Trophy", medal: "gold" },
      { year: "2020", name: "Northeast Games Football", medal: "gold" },
      { year: "2019", name: "Federation Cup Football", medal: "bronze" }
    ],
    participations: [
      { year: "2018", name: "I-League 2nd Division" },
      { year: "2017", name: "Shillong Premier League" },
      { year: "2016", name: "Meghalaya State League" },
      { year: "2015", name: "Subroto Cup" },
      { year: "2014", name: "Inter-District Football Championship" }
    ]
  },
  {
    slug: "donkupar-l-shadab",
    name: "Donkupar L. Shadab",
    image: "/images/athlete-directory/five.jpeg",
    sport: "Archery",
    location: "Jowai, Meghalaya",
    level: "National",
    gold: 5,
    silver: 8,
    bronze: 7,
    biography:
      "Donkupar L. Shadab has built a strong reputation in archery through disciplined practice and consistent scoring at regional meets. His performances continue to inspire grassroots participation in precision sports.",
    competitions: [
      { year: "2023", name: "National Archery Championship", medal: "silver" },
      { year: "2022", name: "Khelo India Games", medal: "bronze" },
      { year: "2021", name: "National Ranking Archery", medal: "silver" },
      { year: "2020", name: "East Zone Archery", medal: "gold" },
      { year: "2019", name: "Meghalaya Games", medal: "gold" }
    ],
    participations: [
      { year: "2018", name: "State Archery Championship" },
      { year: "2017", name: "Jaintia Hills Archery Meet" },
      { year: "2016", name: "District School Games" },
      { year: "2015", name: "Local Club Competition" }
    ]
  },
  {
    slug: "dakahi-kyndait",
    name: "Dakahi Kyndait",
    image: "/images/athlete-directory/six.jpg",
    sport: "Marathon",
    location: "Jowai, Meghalaya",
    level: "State",
    gold: 3,
    silver: 9,
    bronze: 11,
    biography:
      "Dakahi Kyndait is an endurance athlete focused on marathon and long-distance events. Known for resilience and pacing discipline, Dakahi has represented Meghalaya in several road and track endurance competitions.",
    competitions: [
      { year: "2023", name: "Shillong 10K Run", medal: "gold" },
      { year: "2022", name: "Jowai Half Marathon", medal: "silver" },
      { year: "2021", name: "Meghalaya State Marathon", medal: "bronze" },
      { year: "2020", name: "Northeast Run", medal: "silver" },
      { year: "2019", name: "Sohra Marathon", medal: "bronze" }
    ],
    participations: [
      { year: "2018", name: "East Khasi Hills Marathon" },
      { year: "2017", name: "District Endurance Run" },
      { year: "2016", name: "State School Games Run" },
      { year: "2015", name: "Local Run Event" }
    ]
  }
];

const featuredAthleteSlugs = [
  "wanning-tariang",
  "linestar-lyngkhoi",
  "laldanpuii-puruksaii"
] as const;

export const featuredAthletes: AthleteProfile[] = featuredAthleteSlugs
  .map((slug) => athleteProfiles.find((athlete) => athlete.slug === slug))
  .filter((athlete): athlete is AthleteProfile => Boolean(athlete));

