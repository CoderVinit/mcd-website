

export interface VenueProperties {
  title: string;
  address: string;
  sportsList: string[];
  image: string;
}

export interface VenueFeature {
  type: "Feature";
  geometry: { type: "Point"; coordinates: [number, number] };
  properties: VenueProperties;
}

export interface VenueFeatureCollection {
  type: "FeatureCollection";
  features: VenueFeature[];
}

export const meghalayaMapVenues: VenueFeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [91.792, 25.518] },
      properties: {
        title: "J.N. Sports Complex",
        address: "Polo Ground, Polo, Shillong, East Khasi Hills, Meghalaya – 793001, India",
        sportsList: ["Multi-Sport"],
        image: "/images/venues/JN_Sports_Complex.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [90.075, 25.472] },
      properties: {
        title: "Pa Sangma Sports Complex",
        address: "P. A. Sangma Sports Complex, Dakopgre, Tura, West Garo Hills, Meghalaya – 794001, India",
        sportsList: ["Multi-Sport"],
        image: "/images/venues/Pa_Sangma_Sports_Complex.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [92.255, 25.432] },
      properties: {
        title: "Wahiajer Sports Complex",
        address: "Wahiajer Sports Complex, Jowai, West Jaintia Hills, Meghalaya – 793150, India",
        sportsList: ["Multi-Sport"],
        image: "/images/venues/Wahiajer_Sports_Complex.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [90.318, 25.528] },
      properties: {
        title: "PA Togan Athletics Stadium",
        address: "Pa Togan Nengminja Sangma Athletics Stadium",
        sportsList: ["Athletics"],
        image: "/images/venues/PA_Togan_Athletics_Stadium.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [91.998, 25.672] },
      properties: {
        title: "Mawkhanu Sports Complex",
        address: "Mawkhanu, New Shillong, Meghalaya",
        sportsList: ["Multi-Sport"],
        image: "/images/venues/Mawkhanu_Sports_Complex.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [91.978, 25.592] },
      properties: {
        title: "Umswali Sports Complex",
        address: "Shillong, Meghalaya",
        sportsList: ["Multi-Sport"],
        image: "/images/venues/Umswali_Sports_Complex.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [90.198, 25.558] },
      properties: {
        title: "Sunny Hills Indoor Hall",
        address: "Sunny Hills locality, Tura, West Garo Hills, Meghalaya",
        sportsList: ["Indoor Sports"],
        image: "/images/venues/Sunny_Hills_Indoor_Hall.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [91.758, 25.628] },
      properties: {
        title: "Lawshotun Indoor Hall",
        address: "Lawsohtun, District East Khasi Hills",
        sportsList: ["Indoor Sports"],
        image: "/images/venues/Lawshotun_Indoor_Hall.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [91.852, 25.482] },
      properties: {
        title: "Gymnastics Indoor Hall",
        address: "St. Anthony's HSS, St. Anthony's Gymnastics Hall, Shillong",
        sportsList: ["Gymnastics"],
        image: "/images/venues/Gymnastics_Indoor_Hall.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [92.072, 25.505] },
      properties: {
        title: "Kiang Nangbah Indoor Hall",
        address: "Kiang Nangbah Indoor Hall Jowai",
        sportsList: ["Indoor Sports"],
        image: "/images/venues/Kiang_Nangbah_Indoor_Hall.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [91.928, 25.576] },
      properties: {
        title: "Shooting Academy",
        address: "HW55+435, NH6, Nongthymmai, Shillong, Meghalaya 793014",
        sportsList: ["Shooting"],
        image: "/images/venues/Shooting_Academy.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [92.048, 25.778] },
      properties: {
        title: "White Water Village",
        address: "Umsning, Ri Bhoi District, Meghalaya, PIN 793105",
        sportsList: ["Water Sports"],
        image: "/images/venues/White_Water_Village.jpg",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [91.698, 25.658] },
      properties: {
        title: "Umiam Lake",
        address: "near Orchid Lake Resort, Umiam, Meghalaya 793122",
        sportsList: ["Water Sports"],
        image: "/images/venues/Umiam_Lake.jpg",
      },
    },
  ],
};
