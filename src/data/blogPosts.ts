export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  paragraphs: string[];
  image: string;
  scope: string;
  status: string;
  scopeColor: { bg: string; text: string };
  statusColor: { bg: string; text: string };
  startDate: string;
  endDate: string;
  location: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: 0,
    title: "Empowering Sports & Youth Development in Delhi MCD Schools",
    excerpt:
      "Municipal Corporation of Delhi (MCD) & Sports Infrastructure & Talent Development Society (SITDS) serve as the primary organizing bodies responsible for grassroots sports development across Delhi...",
    paragraphs: [
      "Municipal Corporation of Delhi (MCD) in partnership with SITDS is the leading agency in Delhi for creating and executing grassroots primary school sports programs. Its primary goal is to encourage the holistic development of young people through structured sports and talent identification initiatives. MCD & SITDS are responsible for creating competition guidelines, launching school sports programs, and allocating resources to promote sportsmanship and community involvement.",
      "MCD works to identify and nurture sporting talent at the grassroots level by organizing coaching camps, competitions, and talent audits throughout Delhi zones. They provide training facilities, equipment, and expert guidance to aspiring young athletes, enabling them to excel in grassroots football. The organization also collaborates with primary schools, cluster academies, and sports associations to integrate structured competition into the education system.",
      "MCD & SITDS implement various youth development programs focused on skill development, physical fitness, and leadership training. These initiatives aim to equip young players with the skills necessary to succeed on and off the field. The agency also supports community football clubs, providing them with technical assistance and equipment support.",
      "The MCD Mini League plays a crucial role in promoting social inclusion and unity through sports. They organize events and matches that bring together young athletes from different Delhi zones, fostering mutual respect and teamwork.",
      "MCD is committed to creating a brighter future for the primary school students of Delhi by empowering them to reach their full potential through active sports participation."
    ],
    image: "/images/events/one.png",
    scope: "National",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "31 Mar, 2026",
    endDate: "14 Apr, 2026",
    location: "Thyagaraj Stadium, INA Colony, New Delhi",
  },
  {
    id: 1,
    title: "MCD Mini League Athletic Championships",
    excerpt: "Showcasing top primary school athletes from across Delhi MCD zones in high-profile competitions.",
    paragraphs: [
      "The MCD Mini League Athletic Championships showcase top primary school athletes from across Delhi zones in high-profile grassroots competitions. MCD plans to send top track and field students for specialized coaching camps ahead of state qualifiers.",
      "MCD & SITDS work alongside national football and sports bodies to coordinate training infrastructure, ensuring that young players have access to quality pitches, physical trainers, and player tracking systems.",
      "With partnerships from certified equipment suppliers, the program targets athletic growth across stadium venues in Delhi to build endurance and competitive excellence."
    ],
    image: "/images/events/two.png",
    scope: "State Level",
    status: "Upcoming Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "18 May, 2026",
    endDate: "25 May, 2026",
    location: "Chhatrasal Stadium, Model Town, Delhi",
  },
  {
    id: 2,
    title: "MCD Grassroots Sports Infrastructure Expansion",
    excerpt: "Planning, construction, and maintenance of school pitches, sports complexes, and training facilities across Delhi.",
    paragraphs: [
      "The MCD infrastructure expansion program focuses on the planning, construction, and maintenance of high-quality football turfs, athletic tracks, and indoor multi-sport courts across all 12 MCD zones. Our operations team is actively upgrading Thyagaraj Stadium and primary school grounds to ensure safe, professional training environments.",
      "Ensuring sustainable operations, the engineering wing works to incorporate modern drainage, solar floodlights, and efficient irrigation systems to keep local pitches green and playable year-round.",
      "Partnerships with sports bodies have streamlined equipment distribution and field maintenance, making gear delivery transparent across MCD primary schools and community clubs."
    ],
    image: "/images/events/three.png",
    scope: "State Level",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "01 Jun, 2026",
    endDate: "15 Jun, 2026",
    location: "Ambedkar Stadium, Delhi Gate, New Delhi",
  },
  {
    id: 3,
    title: "Grassroots Pitch & Facility Maintenance",
    excerpt: "Planning, construction, and maintenance of youth football pitches and stadium facilities.",
    paragraphs: [
      "Continuing the MCD sports infrastructure drive, secondary phase construction of football fields and athletic tracks has commenced. Backed by municipal funding and technical consultants, we are optimizing local facility operations and maintaining high turf quality.",
      "Specialized training blocks for youth athletes are being integrated into stadium centers, granting Delhi primary school children access to professional setups.",
      "MCD plans to fully map all venues under a digital catalog system, enabling registered clubs to search, book, and coordinate fixtures online."
    ],
    image: "/images/events/four.png",
    scope: "State Level",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "10 Jul, 2026",
    endDate: "24 Jul, 2026",
    location: "Jawaharlal Nehru Stadium Complex, New Delhi",
  },
  {
    id: 4,
    title: "Delhi Community Grassroots Sports Day",
    excerpt: "A day of fun and competition for local school families, featuring football matches, races, and activities.",
    paragraphs: [
      "The Delhi Community Grassroots Sports Day was a massive success, hosting local families for a day of fun and competition in New Delhi. Featuring football exhibition matches, relay races, and child-friendly activities, the event promoted health and fitness at the grassroots level.",
      "Volunteers and coaches led the event logistics, helping coordinate match fixtures, medical desks, and fan experience zones. This community effort highlights the strong partnership between MCD primary schools and local football clubs.",
      "Winning participants received medals and certificates signed by MCD officials, inspiring young athletes to continue active training."
    ],
    image: "/images/events/five.png",
    scope: "Local",
    status: "Completed Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "28 Aug, 2026",
    endDate: "29 Aug, 2026",
    location: "Thyagaraj Stadium Arena, New Delhi",
  },
  {
    id: 5,
    title: "MCD School Sports Court & Turf Upgrades",
    excerpt: "Upgrading primary school grounds and sports pitches across Central, South, North, and West Delhi zones.",
    paragraphs: [
      "New plans have been announced for building modern football turfs and multi-sport play spaces in MCD primary schools. By partnering with local clubs and SITDS, MCD ensures that even neighborhood primary schools receive technical resources and coaching clinics.",
      "Focusing on inclusivity, the new facilities will house specific player-friendly pathways, restrooms, and training gear, promoting universal sports access across Delhi.",
      "The sports desk has allocated maintenance funding to secure pitch equipment and certified coaching staff for local community football clubs."
    ],
    image: "/images/events/six.png",
    scope: "State Level",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "12 Sep, 2026",
    endDate: "18 Sep, 2026",
    location: "Chhatrasal Stadium Turf, Model Town, Delhi",
  },
  {
    id: 6,
    title: "Monsoon Weather-Proof Football Pitch Drainage",
    excerpt: "Advanced sub-surface drainage systems installed on Delhi stadium fields for year-round league play.",
    paragraphs: [
      "Advanced sub-surface drainage systems are being integrated into MCD Mini League football fields. These technical enhancements minimize rain delays and maximize pitch usability, ensuring continuous development for youth players without weather interruptions.",
      "By using premium sand-based grass turfs, local stadiums prevent waterlogging, maintaining a safe surface for young players and reducing injury rates.",
      "Coordinating with schools, MCD has integrated weekend league schedules to run on these optimized fields, guaranteeing youth teams consistent match exposure."
    ],
    image: "/images/events/seven.png",
    scope: "State Level",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "05 Oct, 2026",
    endDate: "20 Oct, 2026",
    location: "Thyagaraj Stadium Main Pitch, New Delhi",
  },
];
