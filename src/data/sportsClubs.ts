export interface SportsClub {
  name: string;
  sport: string;
  president: string;
  status: "Registered" | "Unregistered";
  affiliatedClubsCount: number;
  athletesCount: number;
  eventsCount: number;
}

export const associationsData: SportsClub[] = [
  {
    name: "Central Delhi MCD Football Council",
    sport: "Football 11v11",
    president: "MCD Zonal Directorate",
    status: "Registered",
    affiliatedClubsCount: 16,
    athletesCount: 640,
    eventsCount: 24,
  },
  {
    name: "South Delhi Youth Football Federation",
    sport: "Football 11v11",
    president: "SITDS Coordinating Officer",
    status: "Registered",
    affiliatedClubsCount: 18,
    athletesCount: 720,
    eventsCount: 28,
  },
  {
    name: "North Delhi MCD Cluster Board",
    sport: "Football 11v11",
    president: "Zonal Education Inspector",
    status: "Registered",
    affiliatedClubsCount: 14,
    athletesCount: 560,
    eventsCount: 20,
  },
  {
    name: "East Delhi Grassroots Football Body",
    sport: "Football 11v11",
    president: "Sports Directorate Delhi",
    status: "Registered",
    affiliatedClubsCount: 16,
    athletesCount: 640,
    eventsCount: 24,
  },
  {
    name: "West Delhi MCD Football Association",
    sport: "Football 11v11",
    president: "MCD Zonal Directorate",
    status: "Registered",
    affiliatedClubsCount: 16,
    athletesCount: 640,
    eventsCount: 24,
  },
];

export const clubsData: SportsClub[] = [
  {
    name: "Central MCD Strikers Club",
    sport: "Football 11v11",
    president: "Central Zone Coordinator",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
  {
    name: "South Delhi United Cluster",
    sport: "Football 11v11",
    president: "Green Park Academy Director",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
  {
    name: "Rohini Lions Sports Club",
    sport: "Football 11v11",
    president: "Rohini Sector 9 Sports Board",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
  {
    name: "Shahdara East Warriors Club",
    sport: "Football 11v11",
    president: "Shahdara Primary Network",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
  {
    name: "Civil Lines Cluster Academy",
    sport: "Football 11v11",
    president: "Model Town Sports Head",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
  {
    name: "Najafgarh Champions Club",
    sport: "Football 11v11",
    president: "Najafgarh MCD Schools Head",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
  {
    name: "Karol Bagh Tigers Club",
    sport: "Football 11v11",
    president: "Karol Bagh Sports Council",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
  {
    name: "West Delhi Academy Club",
    sport: "Football 11v11",
    president: "West Delhi Football Director",
    status: "Registered",
    affiliatedClubsCount: 4,
    athletesCount: 56,
    eventsCount: 12,
  },
];
