import { PROJECT_VENUE_ROWS } from './projectVenueRows';

export type Status = 'Completed' | 'Ongoing' | 'Planned';
export type Filter = 'All' | 'Ongoing' | 'Completed';

export interface Project {
  id: number;
  district: string;
  location: string;
  category: string;
  title: string;
  status: Status;
  budget: string;
  beneficiaries: number;
  year: number;
  type: string;
}

export interface ProjectDetail {
  id: number;
  description?: string;
  timeline?: string;
  activeDuration?: string;
  image?: string;
  /** When set, image carousel uses these paths; otherwise `image` is repeated for slides. */
  gallery?: string[];
  highlights?: string[];
}

export interface District {
  name: string;
  budget: string;
}

export const STATUS_STYLES: Record<Status, string> = {
  Completed: 'text-green bg-green/5',
  Ongoing:   'text-status-ongoing bg-status-ongoing-bg',
  Planned:   'text-status-planned bg-status-planned-bg',
};

export function fmt(n: number): string {
  return n >= 1000 ? (n / 1000).toFixed(0) + ',000' : String(n);
}

export const districts: District[] = [
  { name: 'East Khasi Hills',           budget: '₹2.3 Cr' },
  { name: 'West Khasi Hills',           budget: '₹2.0 Cr' },
  { name: 'Ri Bhoi',                    budget: '₹1.6 Cr' },
  { name: 'East Jaintia Hills',         budget: '₹1.9 Cr' },
  { name: 'Ext Jaintia Hills',          budget: '₹3.2 Cr' },
  { name: 'East Garo Hills',            budget: '₹1.8 Cr' },
  { name: 'West Garo Hills',            budget: '₹2.3 Cr' },
  { name: 'South Garo Hills',           budget: '₹2.0 Cr' },
  { name: 'North Garo Hills',           budget: '₹5.3 Cr' },
  { name: 'South West Khasi Hills',     budget: '₹1.9 Cr' },
  { name: 'South West Garo Hills',      budget: '₹5.2 Cr' },
  { name: 'Eastern West Khasi Hills',   budget: '₹1.8 Cr' },
];

function normalizeVenueTitle(raw: string): string {
  return raw.replace(/\.\s*$/, '').replace(/,\s*$/, '').trim();
}

function inferCategory(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('office')) return 'Administrative';
  if (t.includes('swimming')) return 'Aquatics';
  if (t.includes('cricket')) return 'Cricket';
  if (t.includes('football')) return 'Football';
  if (t.includes('tennis')) return 'Tennis';
  if (t.includes('basketball')) return 'Basketball';
  if (t.includes('squash')) return 'Squash';
  if (t.includes('stadium')) return 'Outdoor Stadium';
  if (t.includes('training hall')) return 'Indoor Sports';
  if (t.includes('indoor sports hall') || t.includes('gymnasium')) return 'Indoor Sports';
  if (t.includes('playground') || t.includes('playfield')) return 'Outdoor Sports';
  if (t.includes('gallery') || t.includes('rostrum')) return 'Infrastructure Upgrade';
  return 'Sports Infrastructure';
}

function inferType(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('office')) return 'Construction';
  if (t.includes('j.n.') || t.includes('jns')) return 'Multi-Sport Club';
  if (t.includes('gallery') || t.includes('vip rostrum') || t.includes('sitting gallery')) return 'Renovation';
  if (t.includes('swimming')) return 'Renovation';
  return 'Construction';
}

const STATUS_CYCLE: Status[] = ['Completed', 'Ongoing', 'Completed', 'Planned'];
const BUDGET_CYCLE = ['₹15.00 L', '₹12.50 L', '₹18.80 L', '₹10.25 L', '₹22.50 L', '₹30.35 L'];

export const allProjects: Project[] = PROJECT_VENUE_ROWS.map((row, i) => {
  const title = normalizeVenueTitle(row[0]);
  const [, district, location] = row;
  return {
    id: i + 1,
    district,
    location,
    category: inferCategory(title),
    title,
    status: STATUS_CYCLE[i % STATUS_CYCLE.length],
    budget: BUDGET_CYCLE[i % BUDGET_CYCLE.length],
    beneficiaries: 800 + ((i * 127) % 2200),
    year: 2023 + (i % 4),
    type: inferType(title),
  };
});

/** Max projects listed per district in the explorer; sidebar count matches this pool. */
export const MAX_PROJECTS_PER_DISTRICT = 12;

const OUTDOOR_STADIUM_NONGSTOIN_TITLE = 'Outdoor Stadium at Nongstoin West Khasi Hills District';

export function getExplorerProjectsForDistrict(districtName: string): Project[] {
  const list = allProjects.filter((p) => p.district === districtName);
  const sliced = list.slice(0, MAX_PROJECTS_PER_DISTRICT);
  if (districtName === 'West Khasi Hills') {
    return [...sliced].sort((a, b) => {
      const rank = (p: Project) => (p.title === OUTDOOR_STADIUM_NONGSTOIN_TITLE ? 0 : 1);
      return rank(a) - rank(b);
    });
  }
  return sliced;
}

export function getExplorerDistrictProjectCount(districtName: string): number {
  return getExplorerProjectsForDistrict(districtName).length;
}

// ─── Generated project detail (Polo-style layout, venue-specific copy) ─────
/** Used to pad project detail carousel to 5 slides when fewer venue photos are set. */
export const DEFAULT_PROJECT_GALLERY_IMAGE = '/images/infra/stadium.jpg';
const JN_SPORTS_GALLERY = ['/images/infra/jn_sports.png', '/images/venues/JN_Sports_Complex.jpg'];

/** Venue-specific carousel images (padded to 5 slides in UI). Keys = project `id`. */
const VENUE_IMAGE_GALLERIES: Record<number, string[]> = {
  2: ['/images/infra/Squash_Court_Lower_Lachumiere.jpg'],
  3: ['/images/infra/indoor_sports_hall.jpg'],
  4: ['/images/infra/Crinoline_Swimming_Pool.jpg'],
  17: ['/images/infra/Indoor_Sports_Hall_Nongstoin.jpg'],
  18: ['/images/infra/Indoor_Sports_Hall_Kynshi.jpg'],
  19: ['/images/infra/Swimming_Pool_Ranikor.jpg'],
  33: ['/images/infra/Outdoor_Stadium_Nongstoin.png'],
};

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

/** Facility phrase before first " at " (fallback: first comma segment or full title). */
function facilityLabelFromTitle(title: string): string {
  const lower = title.toLowerCase();
  const at = lower.indexOf(' at ');
  if (at > 0) return title.slice(0, at).replace(/,\s*$/, '').trim();
  const comma = title.indexOf(',');
  if (comma > 0) return title.slice(0, comma).trim();
  return title.trim();
}

function buildTimeline(project: Project): string {
  const seed = project.id * 7919;
  const d1 = 1 + (seed % 28);
  const m1 = 2 + ((seed >> 3) % 10);
  const d2 = 1 + ((seed >> 7) % 28);
  const m2 = 3 + ((seed >> 11) % 9);
  const yStart = project.year - 1;
  const yEnd = project.year + 2;
  return `${pad2(d1)}/${pad2(m1)}/${yStart} - ${pad2(d2)}/${pad2(m2)}/${yEnd}`;
}

function buildActiveDuration(project: Project): string {
  const n = Math.min(950, Math.max(120, Math.round(project.beneficiaries * 0.35 + project.id * 3)));
  return `${n}+`;
}

function buildDescription(project: Project): string {
  const { title, location, district, category, type } = project;
  const programme =
    type === 'Multi-Sport Club' ? 'The Multi-Sport Club Programme' : `The ${type} Programme`;
  if (category === 'Administrative') {
    return `${title} Houses Administrative Workspace And Residential Quarters For Sports Officers Based At ${location}, ${district}. Delivered Under ${programme}, It Supports Programme Oversight, Field Coordination, And Secure Accommodation Aligned With Government Norms For Sports Departments.`;
  }
  return `${title} Is A ${category} Venue At ${location}, ${district}, Strengthening Grassroots Access And Competitive Sport Across Meghalaya. Executed Under ${programme}, The Asset Adds Safe, Inclusive Infrastructure For Training, Events, And Everyday Community Use While Supporting Long-Term Maintainability And District Sports Plans.`;
}

function primaryHighlight(project: Project): string {
  const label = facilityLabelFromTitle(project.title);
  const { title, location, district } = project;
  const t = title.toLowerCase();

  if (t.includes('office') || (t.includes('quarter') && t.includes('dso')))
    return `${label} — Workspace And Attached Quarters Enabling Continuous Oversight Of Sports Programmes Across ${district}.`;
  if (t.includes('swimming'))
    return `${label} — Lane-Based Basin Supporting Aquatic Training, School Sessions, And Lifeguard-Ready Operations At ${location}.`;
  if (t.includes('cricket'))
    return `${label} — Match And Practice Infrastructure With Maintained Outfield Suited To League And Development Fixtures At ${location}.`;
  if (t.includes('football') && !t.includes('cricket'))
    return `${label} — Full-Size Football Surface With Goal Infrastructure And Perimeter Works For Clubs And Schools In ${district}.`;
  if (t.includes('tennis'))
    return `${label} — Court Surfaces And Runoff Zones Designed For Coaching Blocks And Inter-District Fixtures.`;
  if (t.includes('basketball'))
    return `${label} — Regulation Markings, Boards, And Ring Sets For Indoor Or Outdoor Competition Drills At ${location}.`;
  if (t.includes('squash'))
    return `${label} — Enclosed Courts Supporting Racquet Sport Coaching And Talent Identification Programmes.`;
  if (t.includes('stadium'))
    return `${label} — Larger Spectator Footprint With Playing Surface Suited To Athletics Or Football Alongside Crowd Circulation At ${location}.`;
  if (t.includes('gymnasium') || t.includes('training hall'))
    return `${label} — Covered Training Volume For Strength, Conditioning, And Indoor Skill Sessions Serving Athletes Around ${location}.`;
  if (t.includes('indoor sports hall'))
    return `${label} — Multi-Purpose Hall Configurable For Volleyball, Badminton, Martial Arts, And District-Level Indoor Events.`;
  if (t.includes('playground') || t.includes('playfield'))
    return `${label} — Open Playing Surface With Boundary Treatment Supporting Schools, Clubs, And Community Fixtures In ${district}.`;
  if (t.includes('gallery') || t.includes('rostrum') || t.includes('vip'))
    return `${label} — Spectator Amenities Including Covered Gallery Or Rostrum Elements Improving Comfort For Hosted Events At ${location}.`;
  return `${label} — Core ${project.category.toLowerCase()} Capacity Expanding Organised Sport Access For Residents Of ${location}.`;
}

function buildHighlights(project: Project): string[] {
  const label = facilityLabelFromTitle(project.title);
  const { location, district, beneficiaries, status, type } = project;
  const reach = beneficiaries.toLocaleString('en-IN');

  return [
    primaryHighlight(project),
    `District Integration — Anchored In ${location}, Within ${district}, The Venue Aligns With Local Sports Priorities And Travel-To-Play Patterns.`,
    `Delivery Scope — Procured Under ${type} Standards With Durability, Drainage Or Envelope Details Suited To Hill-State Climate And Wear.`,
    `Programme Use — Supports Coaching Camps, School Blocks, Club Rentals, And Sanctioned Fixtures Subject To Venue Scheduling (${status}).`,
    `${label} Operations — Structured For Safe Daily Use, Periodic Maintenance, And Clear Access For Emergency And Support Services.`,
    `Community Reach — Designed To Benefit Approximately ${reach} Registered Users And Broader Informal Participation Over The Active Phase.`,
  ];
}

function buildGeneratedProjectDetail(project: Project): ProjectDetail {
  return {
    id: project.id,
    description: buildDescription(project),
    timeline: buildTimeline(project),
    activeDuration: buildActiveDuration(project),
    image: DEFAULT_PROJECT_GALLERY_IMAGE,
    highlights: buildHighlights(project),
  };
}

// Optional hand-tuned overrides (merged on top of generated detail).
const POLO_COMPLEX_DETAIL: Omit<ProjectDetail, 'id'> = {
  description:
    "Located In The Heart Of Shillong, This Is Meghalaya's Premier State-Run Sports Complex. Inaugurated In 1972, It Spans Multiple Grounds And Indoor Facilities — Serving As The Anchor Venue For State And National-Level Sports Across Cricket, Football, Athletics, And More.",
    timeline: '02/04/2023 - 07/05/2026',
    activeDuration: '768+',
    image: '/images/infra/jn_sports.png',
    gallery: JN_SPORTS_GALLERY,
    highlights: [
      "Cricket Ground (MCA Ground) — Home of the Meghalaya Cricket Association, used for test-level matches, practice, and BCA-affiliated tournaments since MCA's full membership in 2018.",
      'J.N. Stadium (Football Ground) — Two-tier stadium with FIFA-standard natural grass turf and floodlights, home to Shillong Lajong FC and Meghalaya state football team, hosted the I-League last season.',
      'Athletics Track & Field — Top-of-the-line track and field infrastructure capable of hosting national-standard athletics events, added as part of the current upgradation drive.',
      'Indoor Sports Hall — Multi-purpose indoor facility supporting volleyball, archery, and other indoor disciplines. Also used for youth sports camps and talent scouting programmes.',
      'Tennis Complex, Hostels & Offices — Supporting infrastructure including residential hostel for athletes, administrative offices, and a dedicated sports complex within the campus.',
    ],
};

export const projectDetails: ProjectDetail[] = [
  { id: 1, ...POLO_COMPLEX_DETAIL },
  { id: 30, ...POLO_COMPLEX_DETAIL },
  ...Object.entries(VENUE_IMAGE_GALLERIES).map(([id, gallery]) => ({
    id: Number(id),
    image: gallery[0]!,
    gallery,
  })),
];

export function getProjectWithDetail(id: number): (Project & ProjectDetail) | undefined {
  const project = allProjects.find((p) => p.id === id);
  if (!project) return undefined;
  const generated = buildGeneratedProjectDetail(project);
  const override = projectDetails.find((d) => d.id === id);
  return { ...project, ...generated, ...(override ?? {}) };
}

