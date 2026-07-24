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
    title: "Empowering Sports & Youth Development In Meghalaya",
    excerpt:
      "The Directorate of Sports & Youth Affairs (DSYA) serves as the primary government agency responsible for the formulation, implementation, and monitoring of sports and youth development policies across the state of Meghalaya...",
    paragraphs: [
      "The Directorate of Sports & Youth Empowerment (DSYE) is the leading agency in Meghalaya for creating and executing sports and youth programs. Its primary goal is to encourage the holistic development of young people through sports and various empowerment initiatives. DSYE is responsible for creating policies, launching programs, and allocating resources to promote sportsmanship, leadership, and community involvement among the youth.",
      "DSYE works to identify and nurture sporting talent at the grassroots level by organizing coaching camps, competitions, and talent hunts throughout Meghalaya. They provide training facilities, equipment, and expert guidance to aspiring athletes, enabling them to excel in their chosen sports. The agency also collaborates with schools, colleges, and sports associations to integrate sports into the education system and promote a sporting culture.",
      "DSYE implements various youth development programs focused on skill development, entrepreneurship, and leadership training. These initiatives aim to equip young people with the skills and knowledge necessary to succeed in a rapidly changing world. The agency also supports youth-led organizations and initiatives, providing them with financial assistance and mentorship to implement community development projects.",
      "DSYE plays a crucial role in promoting social inclusion and harmony through sports and youth activities. They organize events and campaigns that bring together young people from different backgrounds, fostering mutual understanding and respect. The agency also addresses social issues such as substance abuse, gender inequality, and discrimination through targeted programs and awareness campaigns.",
      "DSYE is committed to creating a brighter future for the youth of Meghalaya by empowering them to reach their full potential. Through its comprehensive programs and initiatives, the agency strives to build a generation of responsible, skilled, and engaged citizens who contribute to the socio-economic development of the state."
    ],
    image: "/images/events/one.png",
    scope: "National",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "31 Mar, 2026",
    endDate: "14 Apr, 2026",
    location: "Tilak Maidan, Vasco",
  },
  {
    id: 1,
    title: "Athletic Championships",
    excerpt: "Showcasing top athletes from various sports in competitions around the globe.",
    paragraphs: [
      "The International Athletic Championships showcase top athletes from various sports in high-profile competitions around the globe. Meghalaya plans to send its top track and field athletes for exposure training ahead of the regional qualifiers. This tournament aims to set new benchmarks and bring international training methods home.",
      "DSYE works alongside national bodies to coordinate training infrastructure, ensuring that athletes have access to high-performance facilities, expert physical therapists, and performance measurement tracking platforms.",
      "With partnerships from JSW Sports and Tata Steel, the program targets elite running performance in high altitude training camps across Northeast India to build athletic stamina and competitive excellence."
    ],
    image: "/images/events/two.png",
    scope: "International",
    status: "Upcoming Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "18 May, 2026",
    endDate: "25 May, 2026",
    location: "JN Sports Complex, Shillong",
  },
  {
    id: 2,
    title: "Sports Infrastructure",
    excerpt: "Planning, construction, and maintenance of stadiums, courts, and training facilities.",
    paragraphs: [
      "The expansion program focuses on the planning, construction, and maintenance of high-performance stadiums, indoor wooden courts, and football turfs across all districts. Our team is actively upgrading the JN Sports Complex and secondary schools facilities to ensure safe, professional, and accessible environments for athletic training.",
      "Ensuring sustainable operations, the engineering wing works to incorporate modern sub-surface drainage, solar-powered field lights, and water-recycling irrigation systems to keep local facilities green and playable year-round.",
      "Empaneled vendor partnerships have streamlined procurement workflows, making equipment distribution and facility repairs quick, cost-effective, and transparent across both rural and urban youth training centers."
    ],
    image: "/images/events/three.png",
    scope: "National",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "01 Jun, 2026",
    endDate: "15 Jun, 2026",
    location: "Mawkhanu Sports Complex, East Khasi Hills",
  },
  {
    id: 3,
    title: "Sports Infrastructure",
    excerpt: "Planning, construction, and maintenance of stadiums, courts, and training facilities.",
    paragraphs: [
      "Continuing the infrastructure drive, secondary phase construction of athletic tracks and tennis courts has commenced. Backed by corporate sponsors and technical consultants, we are optimizing local facility operations, establishing maintenance guidelines, and deploying automated watering systems to preserve turf quality.",
      "Specialized training blocks for gymnastics and target sports are being integrated into regional indoor centers, granting local youths access to high-performance setups that were previously only available in national academies.",
      "The state plans to fully map all venues under a digital catalog system, enabling sports clubs and athletes to search, book, and coordinate matches at local stadiums online."
    ],
    image: "/images/events/four.png",
    scope: "National",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "10 Jul, 2026",
    endDate: "24 Jul, 2026",
    location: "PA Togan Athletics Stadium, Tura",
  },
  {
    id: 4,
    title: "Community Sports Day",
    excerpt: "A day of fun and competition for local families, featuring games, races, and activities.",
    paragraphs: [
      "The Community Sports Day was a massive success, hosting local families for a day of fun and competition in Shillong. Featuring athletic races, community tug-of-war, and child-friendly sports activities, the event promoted health and fitness at the grassroots, bringing neighborhoods together to celebrate sports.",
      "Volunteers from regional colleges led the logistics, helping set up food counters, medical booths, and coordination zones. This community effort highlights the strong partnership between the local youth and sports organizations.",
      "Winning participants received medals and certificates signed by DSYE officials, inspiring local families and aspiring athletes to continue training and active participation in local athletic events."
    ],
    image: "/images/events/five.png",
    scope: "Local",
    status: "Completed Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "28 Aug, 2026",
    endDate: "29 Aug, 2026",
    location: "Umiam Lake, Ri-Bhoi",
  },
  {
    id: 5,
    title: "Sports Infrastructure",
    excerpt: "Planning, construction, and maintenance of stadiums, courts, and training facilities.",
    paragraphs: [
      "New plans have been announced for building state-of-the-art basketball courts and fitness spaces in rural zones. By partnering with local clubs and panchayats, DSYA ensures that even remote sectors receive technical resources, high-grade equipment, and coaching clinics directly on their local courts.",
      "Focusing on inclusivity, the new facilities will also house specific para-athlete friendly pathways, restrooms, and training gear, promoting universal sports access across Meghalaya.",
      "The corporate sponsorship team has pledged additional CSR funding to secure maintenance equipment and professional training sessions for local community managers."
    ],
    image: "/images/events/six.png",
    scope: "National",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "12 Sep, 2026",
    endDate: "18 Sep, 2026",
    location: "Umswali Sports Complex, Shillong",
  },
  {
    id: 6,
    title: "Sports Infrastructure",
    excerpt: "Planning, construction, and maintenance of stadiums, courts, and training facilities.",
    paragraphs: [
      "Advanced sub-surface drainage systems are being integrated into standard football fields. These technical enhancements minimize rain delays and maximize field usability throughout the monsoon season, ensuring continuous development for youth players without weather interruptions.",
      "By using premium-grade sand-based turfs, local stadiums will prevent mud build-up, maintaining a flat, safe surface for players and reducing ankle injury rates during heavy weather conditions.",
      "Coordinating with schools, the local government has integrated weekend league schedules to run on these optimized fields, guaranteeing youth teams consistent match exposure."
    ],
    image: "/images/events/seven.png",
    scope: "National",
    status: "Ongoing Event",
    scopeColor: { bg: "bg-blue-bg", text: "text-dept-blue" },
    statusColor: { bg: "bg-green-light", text: "text-dept-green" },
    startDate: "05 Oct, 2026",
    endDate: "20 Oct, 2026",
    location: "Wahiajer Sports Complex, West Jaintia Hills",
  },
];
