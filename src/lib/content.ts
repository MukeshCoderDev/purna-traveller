/**
 * Editorial content for destinations, journal and videos.
 * Separated from presentation so it can be updated without
 * touching the visual components.
 */
import { images } from "@/lib/images";

export type Destination = {
  id: string;
  name: string;
  tagline: string;
  cardImage: string;
  heroImage: string;
  description: string;
  elevation: string;
  duration: string;
  difficulty: "Moderate" | "Challenging" | "Strenuous";
  bestSeason: string;
  highlights: string[];
  routes: { name: string; detail: string }[];
  gallery: string[];
};

export const destinations: Destination[] = [
  {
    id: "everest",
    name: "Everest",
    tagline: "The roof of the world",
    cardImage: images.everest,
    heroImage: images.everestAlt,
    description:
      "Walk in the shadow of the highest mountain on Earth through the heartland of the Sherpa people. Ancient monasteries, high suspension bridges and the legendary trail to Everest Base Camp.",
    elevation: "8,848.86 m",
    duration: "12–16 days",
    difficulty: "Strenuous",
    bestSeason: "Mar–May · Oct–Nov",
    highlights: [
      "Everest Base Camp (5,364 m)",
      "Kala Patthar sunrise viewpoint",
      "Tengboche Monastery",
      "Sherpa capital of Namche Bazaar",
      "Views of Lhotse, Nuptse & Ama Dablam",
    ],
    routes: [
      {
        name: "Classic Base Camp Trek",
        detail:
          "The classic Lukla → Namche → Tengboche → Dingboche → Lobuche → Gorak Shep → Base Camp route with acclimatisation days.",
      },
      {
        name: "Gokyo Lakes Variation",
        detail:
          "A quieter alternative crossing the Cho La pass to the turquoise Gokyo Lakes with a summit of Gokyo Ri.",
      },
    ],
    gallery: [images.everest, images.everestAlt, images.prayerFlags, images.trekkingAlt ?? images.heroAlt],
  },
  {
    id: "annapurna",
    name: "Annapurna",
    tagline: "Diversity in every valley",
    cardImage: images.annapurna,
    heroImage: images.annapurnaAlt,
    description:
      "From subtropical lowlands to the high arctic pass of Thorong La, the Annapurna region offers the most ecologically diverse trekking in Nepal — rhododendron forests, terraced fields and deep gorges.",
    elevation: "8,091 m",
    duration: "7–21 days",
    difficulty: "Moderate",
    bestSeason: "Mar–May · Oct–Nov",
    highlights: [
      "Annapurna Base Camp (4,130 m)",
      "Poon Hill sunrise over Dhaulagiri",
      "Thorong La pass (5,416 m)",
      "Hot springs at Tatopani",
      "Gurung & Thakali village culture",
    ],
    routes: [
      {
        name: "Annapurna Sanctuary",
        detail:
          "A shorter, immersive trek into the Annapurna Sanctuary amphitheatre with 360° mountain walls.",
      },
      {
        name: "Annapurna Circuit",
        detail:
          "The full circuit crossing Thorong La — Nepal's classic long-distance trek through every climate zone.",
      },
    ],
    gallery: [images.annapurna, images.annapurnaAlt, images.village, images.gallery2Alt ?? images.prayerFlags],
  },
  {
    id: "kanchenjunga",
    name: "Kanchenjunga",
    tagline: "The remote far east",
    cardImage: images.kanchenjunga,
    heroImage: images.kanchenjungaAlt,
    description:
      "The third highest mountain on Earth, far from the popular trails. Kanchenjunga rewards the few who venture here with untouched wilderness, dramatic glaciers and a profound sense of remoteness.",
    elevation: "8,586 m",
    duration: "20–24 days",
    difficulty: "Strenuous",
    bestSeason: "Apr–May · Oct–Nov",
    highlights: [
      "North & South Base Camps",
      "Untouched Limbu & Rai culture",
      "High alpine wilderness",
      "Views of Jannu & Kabru",
      "Far-eastern Nepal tranquillity",
    ],
    routes: [
      {
        name: "North Base Camp Trek",
        detail:
          "A long, remote trek to Pangpema — the north base camp of Kanchenjunga through pristine valleys.",
      },
      {
        name: "South Base Camp & Yalung Glacier",
        detail:
          "The southern approach to Yalung Base Camp with dramatic glacier views and high passes.",
      },
    ],
    gallery: [images.kanchenjunga, images.kanchenjungaAlt, images.panoAlt ?? images.heroAlt, images.prayerFlags],
  },
  {
    id: "makalu",
    name: "Makalu",
    tagline: "The fifth giant",
    cardImage: images.makalu,
    heroImage: images.makaluAlt,
    description:
      "The fifth highest mountain on Earth rises in near-perfect pyramid isolation. The trek to its base camp is a wild, little-visited journey through the Makalu Barun National Park.",
    elevation: "8,485 m",
    duration: "18–22 days",
    difficulty: "Strenuous",
    bestSeason: "Apr–May · Oct–Nov",
    highlights: [
      "Makalu Base Camp (4,870 m)",
      "Makalu Barun National Park",
      "Sherwani & Barun valleys",
      "Diverse flora & rare wildlife",
      "Views of Everest & Lhotse",
    ],
    routes: [
      {
        name: "Makalu Base Camp Trek",
        detail:
          "The classic route from Tumlingtar up the Arun Valley to Makalu Base Camp beneath the great pyramid.",
      },
      {
        name: "Three Cols Traverse",
        detail:
          "An advanced crossing of Sherpani, West Col and Amphu Labtsa passes connecting Makalu to the Khumbu.",
      },
    ],
    gallery: [images.makalu, images.makaluAlt, images.trekking ?? images.heroAlt, images.prayerFlags],
  },
];

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  cover: string;
  body: string[];
};

export const journalCategories = [
  "Trekking Guides",
  "Everest Stories",
  "Annapurna Stories",
  "Himalayan Life",
  "Travel Tips",
  "Mountain Experiences",
] as const;

export const journalArticles: JournalArticle[] = [
  {
    slug: "acclimatising-safely-himalaya",
    title: "Acclimatising Safely in the Himalaya",
    excerpt:
      "Why the 'climb high, sleep low' principle is the single most important rule on any high-altitude trek — and how I pace my groups.",
    category: "Trekking Guides",
    date: "12 Mar 2025",
    readingTime: "6 min read",
    cover: images.trekking ?? images.heroAlt,
    body: [
      "Altitude is the great equaliser in the Himalaya. Fitness, youth and experience matter far less than how respectfully you let your body adapt to thinning air.",
      "On every trek I guide, I build in dedicated acclimatisation days rather than treating them as optional. The golden rule — climb high, sleep low — lets your body experience higher altitude by day and recover by night.",
      "I watch for the early signals: a headache that lingers, loss of appetite, restless sleep. Caught early, these pass with rest and hydration. Ignored, they become dangerous.",
      "My approach is simple: walk slowly, drink constantly, and never let a schedule override safety. The mountains will always be there tomorrow.",
    ],
  },
  {
    slug: "everest-base-camp-the-honest-guide",
    title: "Everest Base Camp: The Honest Guide",
    excerpt:
      "What the trekkers don't tell you — the cold nights, the joy of a hot lemon tea, and the moment the Khumbu Icefall first appears.",
    category: "Everest Stories",
    date: "28 Feb 2025",
    readingTime: "8 min read",
    cover: images.everestAlt,
    body: [
      "Everyone imagines the summit. The reality of Everest Base Camp is more human: a string of teahouse lodges, yak trains on narrow trails, and the quiet rituals of trail life.",
      "The first sight of the Khumbu Icefall — a frozen river of broken towers — stops every trekker in their tracks. It is beautiful and humbling in equal measure.",
      "The cold nights are real, but so is the warmth of a Sherpa family sharing their kitchen. Some of my best memories are those evenings, not the viewpoints.",
      "Come prepared, come patient, and Everest will give you more than a photograph.",
    ],
  },
  {
    slug: "annapurna-in-the-rhododendron-season",
    title: "Annapurna in the Rhododendron Season",
    excerpt:
      "When the forests of the Annapurna foothills turn crimson and pink, the trails become the most beautiful walk in Nepal.",
    category: "Annapurna Stories",
    date: "10 Feb 2025",
    readingTime: "5 min read",
    cover: images.annapurnaAlt,
    body: [
      "In spring the Annapurna foothills erupt in rhododendron — Nepal's national flower. Whole hillsides turn from crimson to soft pink under the snow peaks.",
      "The Ghorepani–Poon Hill route is the classic way to witness it, with a pre-dawn climb to one of the finest sunrise viewpoints in the Himalaya.",
      "It is a gentle trek, ideal for first-time visitors, and a reminder that the Himalaya is not only about altitude — it is about colour, culture and quiet beauty.",
    ],
  },
  {
    slug: "life-in-a-mountain-teahouse",
    title: "Life in a Mountain Teahouse",
    excerpt:
      "A window into the family-run lodges that are the real heart of trekking in Nepal — and the people who keep them warm.",
    category: "Himalayan Life",
    date: "22 Jan 2025",
    readingTime: "7 min read",
    cover: images.village,
    body: [
      "The teahouse is the soul of the Nepali trek. More than a bed and a meal, it is a family home opened to strangers, lit by a single stove.",
      "Evenings revolve around the dining room's iron stove. Trekkers from a dozen nations sit shoulder to shoulder, drying socks, sharing stories, eating dal bhat.",
      "The families who run these lodges are the unsung heroes of the Himalaya — keeping routes alive through winters, floods and quiet seasons.",
      "When you trek with me, you meet these families. That is the Nepal I want you to see.",
    ],
  },
  {
    slug: "what-to-pack-for-a-nepal-trek",
    title: "What to Pack for a Nepal Trek",
    excerpt:
      "A practical, no-nonsense packing list refined over ten seasons of guiding in the Himalaya.",
    category: "Travel Tips",
    date: "05 Jan 2025",
    readingTime: "6 min read",
    cover: images.trekkingAlt ?? images.heroAlt,
    body: [
      "After ten years of guiding, my packing advice has narrowed to one principle: layer sensibly, carry less, and protect your feet.",
      "A four-layer system — base, mid, insulating, shell — handles everything from subtropical valleys to sub-zero passes. Quality boots broken in before you arrive matter more than anything.",
      "Carry diamox, a headlamp, a power bank, and one dry-bag for electronics. Leave the rest to the teahouses and your porter.",
      "I send every guest a full list before we depart, tailored to their route and season.",
    ],
  },
  {
    slug: "a-storm-on-makalu",
    title: "A Storm on Makalu",
    excerpt:
      "The night the weather turned at high camp — a story about patience, trust, and knowing when to turn around.",
    category: "Mountain Experiences",
    date: "18 Dec 2024",
    readingTime: "9 min read",
    cover: images.makaluAlt,
    body: [
      "We were two hours from Makalu Base Camp when the sky closed. What began as a whisper of wind became a wall of snow in minutes.",
      "There is a moment in every storm when the decision must be made: push on or turn back. I have learned, painfully, to trust the mountain.",
      "We dug in, shared tea, and waited. By morning the storm had passed and the pyramid of Makalu stood gold in the dawn — the reward for our patience.",
      "The summit is never worth a life. The mountain teaches you this, if you listen.",
    ],
  },
];

export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  thumbnail: string;
};

// Real videos from Purna's verified YouTube channel (@purnatraveller).
// Titles and thumbnails are pulled directly from YouTube — nothing is invented.
const ytThumb = (id: string) =>
  `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const videos: Video[] = [
  {
    id: "v1",
    youtubeId: "NnU3xSoWOZo",
    title: "Kanchenjunga Circuit Trek Nepal | Bhadrapur To Taplejung | Day - 01",
    thumbnail: ytThumb("NnU3xSoWOZo"),
  },
  {
    id: "v2",
    youtubeId: "4vChKKslC7E",
    title: "Kanchenjunga Base Camp Trek Information | Full Itinerary",
    thumbnail: ytThumb("4vChKKslC7E"),
  },
  {
    id: "v3",
    youtubeId: "OiHbN75unGs",
    title: "Kanchenjunga North Base Camp Trek | Part - 01",
    thumbnail: ytThumb("OiHbN75unGs"),
  },
  {
    id: "v4",
    youtubeId: "1M9WSTU4AnY",
    title: "Makalu Base Camp Trek | Itahari To Numluma | 13 hours Journey | Day - 01",
    thumbnail: ytThumb("1M9WSTU4AnY"),
  },
  {
    id: "v5",
    youtubeId: "MdxuZ0WqnEE",
    title: "Kanchenjunga North Base Camp | Trek itinerary | Nepal Trekking Vlog",
    thumbnail: ytThumb("MdxuZ0WqnEE"),
  },
  {
    id: "v6",
    youtubeId: "qiITo13ETqQ",
    title: "The Kanchenjunga Circuit Trek | Day - 1, 2, 3 | Epi - 01",
    thumbnail: ytThumb("qiITo13ETqQ"),
  },
];

// The featured (hero) film for the Videos section.
export const featuredVideo: Video = {
  id: "vf",
  youtubeId: "55LqbDWO3OA",
  title: "Best Trekking Adventure In Nepal | Kanchenjunga Circuit Trek | Day-02",
  thumbnail: ytThumb("55LqbDWO3OA"),
};

export const ytWatchUrl = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;
export const ytEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
