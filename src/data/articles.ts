export type Category = 'profiles' | 'reviews' | 'epic-rides' | 'weekly' | 'features';

export interface Article {
  title: string;
  slug: string;
  beehiivUrl: string;
  category: Category;
  description: string;
  date: string;
  readTime: string;
  featured: boolean;
  image?: string;
}

// Image rotation per category
const categoryImages: Record<Category, string[]> = {
  profiles: ['/images/rider-1.jpg', '/images/adventure-rider.jpg', '/images/hero-road.jpg'],
  reviews: ['/images/bike-closeup.jpg', '/images/sunset-ride.jpg', '/images/group-ride.jpg'],
  'epic-rides': ['/images/mountain-road.jpg', '/images/hero-forest-pov.jpg', '/images/forest-road.jpg'],
  weekly: ['/images/sunset-ride.jpg', '/images/hero-road.jpg', '/images/mountain-road.jpg'],
  features: ['/images/group-ride.jpg', '/images/sunset-ride.jpg', '/images/rider-1.jpg'],
};

export function getImageForArticle(article: Article, index: number): string {
  if (article.image) return article.image;
  const images = categoryImages[article.category];
  return images[index % images.length];
}

export const categoryLabels: Record<Category, string> = {
  profiles: 'Rider Profiles',
  reviews: 'Reviews',
  'epic-rides': 'Epic Rides',
  weekly: 'Weekly',
  features: 'Features',
};

export const categoryColors: Record<Category, string> = {
  profiles: 'badge-profiles',
  reviews: 'badge-reviews',
  'epic-rides': 'badge-epic-rides',
  weekly: 'badge-weekly',
  features: 'badge-features',
};

const BASE = 'https://www.americanmotoco.com/p';

export const articles: Article[] = [
  // ── Rider Profiles ──────────────────────────────────────────
  {
    title: "Hayley Bell: On the Edge of Pakistan's Mountain",
    slug: 'hayley-bell-on-the-edge-of-pakistans-mountain',
    beehiivUrl: `${BASE}/hayley-bell-on-the-edge-of-pakistans-mountain`,
    category: 'profiles',
    description: 'Hayley Bell takes on the Karakoram Highway — one of the most dangerous roads on Earth — with nothing but a motorcycle and conviction.',
    date: '2026-03-26',
    readTime: '7 min read',
    featured: true,
  },
  {
    title: 'Erin Sills: The Motorcycle Never Truly Goes Straight',
    slug: 'erin-sills-the-motorcycle-never-truly-goes-straight',
    beehiivUrl: `${BASE}/erin-sills-the-motorcycle-never-truly-goes-straight`,
    category: 'profiles',
    description: 'A story about balance — on two wheels and in life. Erin Sills on why the wobble is the whole point.',
    date: '2026-02-13',
    readTime: '6 min read',
    featured: true,
  },
  {
    title: 'Tracy Charles, Roo, and the Long Way of Letting Go',
    slug: 'tracy-charles-roo-and-the-long-way-of-letting-go',
    beehiivUrl: `${BASE}/tracy-charles-roo-and-the-long-way-of-letting-go`,
    category: 'profiles',
    description: 'Tracy lost her riding partner and found him again on every mile of pavement. A story about grief, dogs, and the road.',
    date: '2026-01-29',
    readTime: '8 min read',
    featured: false,
  },
  {
    title: "Amanda Knapp and the Ride She Hasn't Taken Yet",
    slug: 'amanda-knapp-and-the-ride-she-hasn-t-taken-yet',
    beehiivUrl: `${BASE}/amanda-knapp-and-the-ride-she-hasn-t-taken-yet`,
    category: 'profiles',
    description: "Sometimes the most important ride is the one you're still planning. Amanda's story of anticipation and purpose.",
    date: '2026-01-15',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Paolo Cattaneo: Outrunning Death at His Own Speed',
    slug: 'paolo-cattaneo-outrunning-death-at-his-own-speed',
    beehiivUrl: `${BASE}/paolo-cattaneo-outrunning-death-at-his-own-speed`,
    category: 'profiles',
    description: 'Paolo rode across continents after a diagnosis that should have stopped him. It didn\'t.',
    date: '2026-02-26',
    readTime: '7 min read',
    featured: true,
  },
  {
    title: 'Michelle Lamphere: The KLR and the Long Way Down',
    slug: 'michelle-lamphere-the-klr-and-the-long-way-down',
    beehiivUrl: `${BASE}/michelle-lamphere-the-klr-and-the-long-way-down`,
    category: 'profiles',
    description: 'A crash on the Trans-Labrador Highway, a KLR 650, and the community that carried Michelle home.',
    date: '2025-12-15',
    readTime: '8 min read',
    featured: false,
  },
  {
    title: 'R-Dub and the Road Glide Bound for Hawaii',
    slug: 'r-dub-and-the-road-glide-bound-for-hawaii',
    beehiivUrl: `${BASE}/r-dub-and-the-road-glide-bound-for-hawaii`,
    category: 'profiles',
    description: 'You can\'t ride a Harley across the Pacific. R-Dub found a way to try anyway.',
    date: '2025-11-03',
    readTime: '6 min read',
    featured: false,
  },
  {
    title: 'Motorcycle Vagabond: Epiphanies & Lessons from Life on the Road',
    slug: 'motorcycle-vagabond-epiphanies-lessons-from-life-on-the-road',
    beehiivUrl: `${BASE}/motorcycle-vagabond-epiphanies-lessons-from-life-on-the-road`,
    category: 'profiles',
    description: 'What happens when you trade a lease for a tank bag and let the road be the plan.',
    date: '2025-11-12',
    readTime: '7 min read',
    featured: false,
  },
  {
    title: 'Vietnam, a Scooter, and 56 Days on the Fourth Floor',
    slug: 'vietnam-a-scooter-and-56-days-on-the-fourth-floor',
    beehiivUrl: `${BASE}/vietnam-a-scooter-and-56-days-on-the-fourth-floor`,
    category: 'profiles',
    description: 'A scooter trip through Vietnam becomes something far bigger than the miles.',
    date: '2025-12-31',
    readTime: '9 min read',
    featured: false,
  },
  {
    title: 'Unprepared in Paradise',
    slug: 'unprepared-in-paradise',
    beehiivUrl: `${BASE}/unprepared-in-paradise`,
    category: 'profiles',
    description: 'No gear list survives first contact with the road. A rider finds beauty in being completely unprepared.',
    date: '2025-12-01',
    readTime: '5 min read',
    featured: false,
  },

  // ── Reviews for Riders ──────────────────────────────────────
  {
    title: 'Reviews for Riders: Yamaha TW200',
    slug: 'reviews-for-riders-tw200',
    beehiivUrl: `${BASE}/reviews-for-riders-tw200`,
    category: 'reviews',
    description: 'The TW200 doesn\'t care about your ego. It just works. A rider\'s honest take on Yamaha\'s little tank.',
    date: '2026-03-12',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: Suzuki Hayabusa',
    slug: 'reviews-for-riders-suzuki-hayabusa',
    beehiivUrl: `${BASE}/reviews-for-riders-suzuki-hayabusa`,
    category: 'reviews',
    description: 'The Hayabusa is a legend for a reason. Here\'s what it\'s actually like to live with one.',
    date: '2026-03-26',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: Harley-Davidson Sportster 883',
    slug: 'reviews-for-riders-harley-davidson-883',
    beehiivUrl: `${BASE}/reviews-for-riders-harley-davidson-883`,
    category: 'reviews',
    description: 'The gateway Harley. Is the 883 Sportster still worth it, or is the mystique all that\'s left?',
    date: '2026-02-26',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: The Ural',
    slug: 'reviews-for-riders-the-ural',
    beehiivUrl: `${BASE}/reviews-for-riders-the-ural`,
    category: 'reviews',
    description: 'A sidecar motorcycle from Russia that refuses to die. The Ural experience, warts and all.',
    date: '2026-02-12',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: 2017 Honda Grom',
    slug: 'reviews-for-riders-the-2017-honda-grom',
    beehiivUrl: `${BASE}/reviews-for-riders-the-2017-honda-grom`,
    category: 'reviews',
    description: 'The most fun you can have at 35 mph. Why the Grom is pure, uncut motorcycle joy.',
    date: '2026-01-14',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: 2001 Honda Gold Wing',
    slug: 'reviews-for-riders-2001-honda-goldwing',
    beehiivUrl: `${BASE}/reviews-for-riders-2001-honda-goldwing`,
    category: 'reviews',
    description: 'The couch of motorcycles. A deep dive into the Gold Wing and why touring riders swear by it.',
    date: '2025-10-30',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Reviews from the Road: Kawasaki KLR650',
    slug: 'reviews-from-the-road-the-kawasaki-klr650',
    beehiivUrl: `${BASE}/reviews-from-the-road-the-kawasaki-klr650`,
    category: 'reviews',
    description: 'The KLR650 will go anywhere, survive anything, and look ugly doing it. That\'s the whole point.',
    date: '2025-12-15',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: Kawasaki Ninja 650',
    slug: 'reviews-for-riders-kawasaki-ninja-650',
    beehiivUrl: `${BASE}/reviews-for-riders-kawasaki-ninja-650`,
    category: 'reviews',
    description: 'Sporty enough to grin, comfortable enough to commute. The Ninja 650 splits the difference.',
    date: '2025-12-31',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: 1969 Honda CB750',
    slug: 'reviews-for-riders-the-1969-honda-cb750',
    beehiivUrl: `${BASE}/reviews-for-riders-the-1969-honda-cb750`,
    category: 'reviews',
    description: 'The bike that changed everything. Riding the original superbike fifty-plus years later.',
    date: '2025-11-06',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: 2003 Suzuki SV650',
    slug: 'reviews-for-riders-the-2003-suzuki-sv650',
    beehiivUrl: `${BASE}/reviews-for-riders-the-2003-suzuki-sv650`,
    category: 'reviews',
    description: 'The SV650 taught a generation how to ride. Here\'s why it\'s still the one to beat.',
    date: '2025-11-20',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: 'Reviews for Riders: Triumph Street Triple 675',
    slug: 'reviews-for-riders-the-triumph-street-triple-675',
    beehiivUrl: `${BASE}/reviews-for-riders-the-triumph-street-triple-675`,
    category: 'reviews',
    description: 'British triple-cylinder perfection. The Street Triple 675 in the hands of a real rider.',
    date: '2026-01-29',
    readTime: '5 min read',
    featured: false,
  },

  // ── Epic Rides ──────────────────────────────────────────────
  {
    title: 'Epic Rides: The Colorado High Country Loop',
    slug: 'epic-rides-the-colorado-high-country-loop',
    beehiivUrl: `${BASE}/epic-rides-the-colorado-high-country-loop`,
    category: 'epic-rides',
    description: 'Mountain passes, alpine meadows, and roads that make your bike feel alive. The Colorado loop.',
    date: '2026-03-12',
    readTime: '5 min read',
    featured: true,
  },
  {
    title: 'Epic Rides: North Cascades Scenic Highway (WA-20)',
    slug: 'epic-rides-north-cascades-scenic-highway-wa-20',
    beehiivUrl: `${BASE}/epic-rides-north-cascades-scenic-highway-wa-20`,
    category: 'epic-rides',
    description: 'Washington\'s best-kept secret. Glaciers, gorges, and empty pavement through the North Cascades.',
    date: '2026-03-26',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: 'Epic Rides: Smoky Mountain 500',
    slug: 'epic-rides-smoky-mountain-500',
    beehiivUrl: `${BASE}/epic-rides-smoky-mountain-500`,
    category: 'epic-rides',
    description: '500 miles of curves through the Great Smoky Mountains. Bring your A-game.',
    date: '2026-02-26',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Epic Rides: Women Riders World Rally',
    slug: 'epic-rides-women-riders-world-rally',
    beehiivUrl: `${BASE}/epic-rides-women-riders-world-rally`,
    category: 'epic-rides',
    description: 'The world\'s largest gathering of women motorcycle riders. What happens when the road belongs to everyone.',
    date: '2026-02-12',
    readTime: '6 min read',
    featured: false,
  },
  {
    title: 'Epic Rides: Daytona Loop',
    slug: 'epic-rides-daytona-loop',
    beehiivUrl: `${BASE}/epic-rides-daytona-loop`,
    category: 'epic-rides',
    description: 'Sun, speed, and the Florida coastline. The Daytona Loop is American riding at its purest.',
    date: '2026-01-29',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: 'Epic Rides: Skyline Drive, Virginia',
    slug: 'epic-rides-skyline-drive-virginia',
    beehiivUrl: `${BASE}/epic-rides-skyline-drive-virginia`,
    category: 'epic-rides',
    description: '105 miles along the crest of the Blue Ridge Mountains. Skyline Drive was made for motorcycles.',
    date: '2026-01-14',
    readTime: '4 min read',
    featured: false,
  },
  {
    title: '12 Must-Ride American Roads in 2026',
    slug: '12-must-ride-american-roads-in-2026',
    beehiivUrl: `${BASE}/12-must-ride-american-roads-in-2026`,
    category: 'epic-rides',
    description: 'From the Tail of the Dragon to the Denali Highway — the definitive riding bucket list for this year.',
    date: '2025-12-15',
    readTime: '6 min read',
    featured: false,
  },
  {
    title: 'Georgia Dragon',
    slug: 'georgia-dragon',
    beehiivUrl: `${BASE}/georgia-dragon`,
    category: 'epic-rides',
    description: 'Forget the Tail of the Dragon. Georgia has its own serpentine secret, and it\'s just as fierce.',
    date: '2025-12-31',
    readTime: '4 min read',
    featured: false,
  },

  // ── Feature Stories ─────────────────────────────────────────
  {
    title: 'Billy Lane: Sons of Speed Race',
    slug: 'billy-lane-sons-of-speed-race',
    beehiivUrl: `${BASE}/billy-lane-sons-of-speed-race`,
    category: 'features',
    description: 'Board track racing is back, and Billy Lane is leading the charge. Inside the Sons of Speed.',
    date: '2026-03-12',
    readTime: '6 min read',
    featured: false,
  },
  {
    title: 'H.O.G.S',
    slug: 'h-o-g-s',
    beehiivUrl: `${BASE}/h-o-g-s`,
    category: 'features',
    description: 'A deep dive into the Harley Owners Group and what it means to the riding community today.',
    date: '2026-02-12',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: "Diogo Moreira's First Encounter with MotoGP",
    slug: 'track-racing-diogo-moreira-s-first-encounter-with-motogp',
    beehiivUrl: `${BASE}/track-racing-diogo-moreira-s-first-encounter-with-motogp`,
    category: 'features',
    description: 'From the streets of Brazil to the MotoGP grid. Diogo Moreira\'s unlikely rise to the top.',
    date: '2025-11-20',
    readTime: '6 min read',
    featured: false,
  },

  // ── Weekly Newsletter ───────────────────────────────────────
  {
    title: 'Weekly 0102',
    slug: 'american-moto-co-weekly-0102',
    beehiivUrl: `${BASE}/american-moto-co-weekly-0102`,
    category: 'weekly',
    description: 'This week\'s curated roundup of the best from the motorcycle world.',
    date: '2026-03-26',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 0101',
    slug: 'american-moto-co-weekly-0101',
    beehiivUrl: `${BASE}/american-moto-co-weekly-0101`,
    category: 'weekly',
    description: 'Kicking off a new season of stories, rides, and community highlights.',
    date: '2026-03-12',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 909',
    slug: 'american-moto-co-weekly-909',
    beehiivUrl: `${BASE}/american-moto-co-weekly-909`,
    category: 'weekly',
    description: 'The best reads, rides, and rider stories from the past week.',
    date: '2026-02-26',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 808',
    slug: 'american-moto-co-weekly-808',
    beehiivUrl: `${BASE}/american-moto-co-weekly-808`,
    category: 'weekly',
    description: 'Your weekly dose of moto culture, curated by the AMC crew.',
    date: '2026-02-12',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 707',
    slug: 'american-moto-co-weekly-707',
    beehiivUrl: `${BASE}/american-moto-co-weekly-707`,
    category: 'weekly',
    description: 'Stories, routes, and community picks from the road.',
    date: '2026-01-29',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 606',
    slug: 'american-moto-co-weekly-606',
    beehiivUrl: `${BASE}/american-moto-co-weekly-606`,
    category: 'weekly',
    description: 'New year, same open road. This week in motorcycle culture.',
    date: '2026-01-15',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 505',
    slug: 'american-moto-co-weekly-505',
    beehiivUrl: `${BASE}/american-moto-co-weekly-505`,
    category: 'weekly',
    description: 'The first roundup of 2026. Here\'s what we\'re reading and riding.',
    date: '2026-01-01',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 404',
    slug: 'american-moto-co-weekly-404',
    beehiivUrl: `${BASE}/american-moto-co-weekly-404`,
    category: 'weekly',
    description: 'End-of-year picks and the rides we\'re planning for next season.',
    date: '2025-12-18',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 303',
    slug: 'american-moto-co-weekly-303',
    beehiivUrl: `${BASE}/american-moto-co-weekly-303`,
    category: 'weekly',
    description: 'Cold weather, warm stories. This week\'s moto highlights.',
    date: '2025-12-04',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Weekly 202',
    slug: 'american-moto-co-weekly-202',
    beehiivUrl: `${BASE}/american-moto-co-weekly-202`,
    category: 'weekly',
    description: 'Community stories and riding news from across the country.',
    date: '2025-11-20',
    readTime: '3 min read',
    featured: false,
  },
];

// Helper functions
export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter(a => a.category === category).sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(a => a.featured).sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatestArticles(count: number): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
}

export function getCategoryCount(category: Category): number {
  return articles.filter(a => a.category === category).length;
}
