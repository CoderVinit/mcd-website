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
    name: "Meghalaya Football Association",
    sport: "Football",
    president: "L. Dkhar",
    status: "Registered",
    affiliatedClubsCount: 45,
    athletesCount: 1200,
    eventsCount: 8,
  },
  {
    name: "State Athletics Federation",
    sport: "Athletics",
    president: "S. Lyngdoh",
    status: "Registered",
    affiliatedClubsCount: 45,
    athletesCount: 1200,
    eventsCount: 8,
  },
  {
    name: "Archery Association Of Meghalaya",
    sport: "Archery",
    president: "R. Sangma",
    status: "Registered",
    affiliatedClubsCount: 45,
    athletesCount: 1200,
    eventsCount: 8,
  },
  {
    name: "Meghalaya Boxing Association",
    sport: "Boxing",
    president: "T. Marak",
    status: "Registered",
    affiliatedClubsCount: 45,
    athletesCount: 1200,
    eventsCount: 8,
  },
  {
    name: "Indigenous Sports Association",
    sport: "Indigenous",
    president: "K. Syiem",
    status: "Registered",
    affiliatedClubsCount: 45,
    athletesCount: 1200,
    eventsCount: 8,
  },
];

export const clubsData: SportsClub[] = [
  {
    name: "Shillong Lajong FC",
    sport: "Football",
    president: "Larsing Ming Sawyan",
    status: "Registered",
    affiliatedClubsCount: 1,
    athletesCount: 150,
    eventsCount: 12,
  },
  {
    name: "Royal Wahingdoh FC",
    sport: "Football",
    president: "Dominic Sutnga",
    status: "Registered",
    affiliatedClubsCount: 1,
    athletesCount: 100,
    eventsCount: 8,
  },
  {
    name: "Meghalaya Archery Club",
    sport: "Archery",
    president: "T. Kharbuli",
    status: "Registered",
    affiliatedClubsCount: 3,
    athletesCount: 80,
    eventsCount: 6,
  },
  {
    name: "Nongkrem Youth & Sports Club",
    sport: "Football & Athletics",
    president: "E. Syiem",
    status: "Registered",
    affiliatedClubsCount: 1,
    athletesCount: 220,
    eventsCount: 15,
  },
  {
    name: "Tura Sports Club",
    sport: "Multi-sport",
    president: "A. Sangma",
    status: "Registered",
    affiliatedClubsCount: 2,
    athletesCount: 180,
    eventsCount: 10,
  },
  {
    name: "Jowai Athletics Club",
    sport: "Athletics",
    president: "M. Shylla",
    status: "Registered",
    affiliatedClubsCount: 1,
    athletesCount: 90,
    eventsCount: 5,
  },
  {
    name: "Mawlai SC",
    sport: "Football",
    president: "K. Kupar",
    status: "Registered",
    affiliatedClubsCount: 1,
    athletesCount: 200,
    eventsCount: 10,
  },
  {
    name: "Ryntih FC",
    sport: "Football",
    president: "P. Lyngdoh",
    status: "Registered",
    affiliatedClubsCount: 1,
    athletesCount: 120,
    eventsCount: 9,
  },
];
