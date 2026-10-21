import { blogPosts } from "@/lib/blog";

export const REQUEST_URL = "/services/new-request";

export const ADDRESS_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("6806 55th St., Kenosha, WI 53144");

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/pooptopia/" },
  { label: "Instagram", href: "https://www.instagram.com/princessolive_n_sirlouie/" },
  { label: "X", href: "https://www.x.com/Pooptopia2023" },
  { label: "YouTube", href: "https://www.youtube.com/@Pooptopia2023" },
];

export const CLIENT_LOGIN =
  "https://clienthub.getjobber.com/client_hubs/c2c3283b-1fee-4b15-b250-b85c50bb9940/login/new?source=share_login";

export const DOG_PARK_URL =
  "https://www.sniffspot.com/listings/kenosha-wi/pooptopia-dog-park-in-kenosha-88111";

export const NOW_HIRING_URL =
  "https://jobs.gusto.com/postings/pooptopia-canine-clean-up-specialist-03c8934f-8158-48b4-b897-1738143169f7";

export type NavItem = {
  href?: string;
  label: string;
  children?: NavItem[];
};

export const headerNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Pooptopia Services",
    children: [
      { href: "/services", label: "Pooptopia Services" },
      { href: "/services/new-request", label: "New Service Request" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  {
    href: "/about/our-why",
    label: "About Us",
    children: [
      { href: "/about/our-why", label: "Our Why" },
      { href: "/about/videos", label: "Pooptopia Videos" },
      { href: "/about/blog", label: "Woof to Waste Blog" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: CLIENT_LOGIN, label: "Client Log-In" },
      { href: DOG_PARK_URL, label: "Pooptopia Dog Park" },
      { href: NOW_HIRING_URL, label: "Now Hiring" },
    ],
  },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const siteNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Pooptopia Services",
    children: [
      { href: "/services", label: "Pooptopia Services" },
      { href: "/services/new-request", label: "New Service Request" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  {
    href: "/about/our-why",
    label: "About Us",
    children: [
      { href: "/about/our-why", label: "Our Why" },
      { href: "/about/videos", label: "Pooptopia Videos" },
      { href: "/about/blog", label: "Woof to Waste Blog" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: CLIENT_LOGIN, label: "Client Log-In" },
      { href: DOG_PARK_URL, label: "Pooptopia Dog Park" },
      { href: NOW_HIRING_URL, label: "Now Hiring" },
    ],
  },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export type GalleryCategory = "before-after" | "dogs" | "cleaning";

export type GalleryItem = {
  src: string;
  title: string;
  category: GalleryCategory;
};

export const gallery: GalleryItem[] = [
  { src: "/images/gallery/before-after-turf.webp", title: "Before and after turf", category: "before-after" },
  { src: "/images/gallery/before-after-planter.webp", title: "Before and after a backyard cleanup", category: "before-after" },
  { src: "/images/gallery/before-after-slope.webp", title: "Before and after a sloped yard", category: "before-after" },
  { src: "/images/gallery/before-after-tree.webp", title: "Before and after under a shade tree", category: "before-after" },
  { src: "/images/gallery/before-after-wide-yard.webp", title: "Before and after a wide backyard", category: "before-after" },
  { src: "/images/gallery/before-after-trampoline.webp", title: "Before and after a backyard with a trampoline", category: "before-after" },
  { src: "/images/gallery/before-after-fence.webp", title: "Before and after along the fence", category: "before-after" },
  { src: "/images/gallery/before-after-gravel.webp", title: "Before and after a gravel path", category: "before-after" },
  { src: "/images/gallery/before-after-snow-corner.webp", title: "Before and after a snowy corner", category: "before-after" },
  { src: "/images/gallery/before-after-marked-lawn.jpg", title: "Before and after a marked lawn", category: "before-after" },
  { src: "/images/gallery/before-after-fenced-lawn.jpg", title: "Before and after a fenced lawn", category: "before-after" },
  { src: "/images/gallery/dogs-with-supplies.webp", title: "Dogs beside sanitation supplies", category: "dogs" },
  { src: "/images/gallery/pickup-with-dog.webp", title: "A visit with a dog", category: "dogs" },
  { src: "/images/gallery/dog-with-team.webp", title: "A team member with a dog", category: "dogs" },
  { src: "/images/gallery/dogs-in-yard.webp", title: "Dogs in a clean yard", category: "dogs" },
  { src: "/images/gallery/team-curbside.webp", title: "Two-person team at the curb", category: "dogs" },
  { src: "/images/gallery/crew-with-dog.jpg", title: "A crew member with a happy dog", category: "dogs" },
  { src: "/images/gallery/family-with-dogs.jpg", title: "A family with their dogs", category: "dogs" },
  { src: "/images/gallery/child-with-dog.jpg", title: "A child relaxing with a dog", category: "dogs" },
  { src: "/images/gallery/man-with-dog-garden.jpg", title: "A dog enjoying the garden", category: "dogs" },
  { src: "/images/gallery/man-walking-dog.jpg", title: "A walk through the park", category: "dogs" },
  { src: "/images/gallery/dogs-at-home.jpg", title: "Two dogs at home", category: "dogs" },
  { src: "/images/gallery/family-with-dogs-gazebo.jpg", title: "Family time with dogs", category: "dogs" },
  { src: "/images/gallery/dog-pooptopia-beanie.jpg", title: "A Pooptopia pup", category: "dogs" },
  { src: "/images/gallery/dog-running-yard.jpg", title: "A dog running in the yard", category: "dogs" },
  { src: "/images/gallery/dog-with-pink-toy.jpg", title: "A dog with a favorite toy", category: "dogs" },
  { src: "/images/gallery/dog-by-lake.jpg", title: "A dog by the lake", category: "dogs" },
  { src: "/images/gallery/woman-with-dog.jpg", title: "A visit with a friendly dog", category: "dogs" },
  { src: "/images/gallery/team-member-portrait.jpg", title: "The Pooptopia team", category: "dogs" },
  { src: "/images/gallery/pooptopia-community-event.jpg", title: "Pooptopia in the community", category: "dogs" },
  { src: "/images/gallery/pooptopia-plush-toys.jpg", title: "Pooptopia plush friends", category: "dogs" },
  { src: "/images/gallery/family-with-dogs-autumn.jpg", title: "Family and dogs in autumn", category: "dogs" },
  { src: "/images/gallery/family-with-dogs-outdoors.jpg", title: "A family with dogs outdoors", category: "dogs" },
  { src: "/images/gallery/woman-with-dog-snow.jpg", title: "A winter visit with a dog", category: "dogs" },
  { src: "/images/gallery/man-with-dog-snow.jpg", title: "A snowy day with a dog", category: "dogs" },
  { src: "/images/gallery/sanitize-trampoline.webp", title: "Sanitizing under a trampoline", category: "cleaning" },
  { src: "/images/gallery/equipment-fence.webp", title: "Equipment along the fence", category: "cleaning" },
  { src: "/images/gallery/waste-bags-snow.webp", title: "Waste bagged to haul away", category: "cleaning" },
  { src: "/images/gallery/grass-closeup.webp", title: "A close look at the grass", category: "cleaning" },
  { src: "/images/gallery/late-winter-yard.webp", title: "A yard in late winter", category: "cleaning" },
  { src: "/images/gallery/team-rakes.webp", title: "The two-person team", category: "cleaning" },
  { src: "/images/gallery/riding-mower.webp", title: "A pass across the lawn", category: "cleaning" },
  { src: "/images/gallery/cleaning-with-dog.jpg", title: "Cleaning with a watchful dog nearby", category: "cleaning" },
  { src: "/images/gallery/yard-cleanup-with-dogs.jpg", title: "A yard cleanup with dogs nearby", category: "cleaning" },
  { src: "/images/gallery/sanitizing-with-dog.jpg", title: "Sanitizing a yard by the pool", category: "cleaning" },
  { src: "/images/gallery/crew-loading-supplies.jpg", title: "The crew loading sanitation supplies", category: "cleaning" },
];

export const serviceAreas = [
  {
    county: "Kenosha County",
    state: "Wisconsin",
    towns: [
      "Kenosha",
      "Pleasant Prairie",
      "Somers",
      "Bristol",
      "Salem",
      "Paddock Lake",
      "Silver Lake",
      "Twin Lakes",
    ],
  },
  {
    county: "Racine County",
    state: "Wisconsin",
    towns: ["Racine", "Mount Pleasant", "Caledonia", "Sturtevant", "Union Grove"],
  },
  {
    county: "Walworth County",
    state: "Wisconsin",
    towns: ["Lake Geneva", "East Troy", "Genoa City"],
  },
  {
    county: "Lake County",
    state: "Illinois",
    towns: ["Antioch", "Fox Lake", "Lindenhurst", "Wadsworth"],
  },
];

export const serviceCounties = serviceAreas.map(
  (area) => `${area.county}, ${area.state === "Wisconsin" ? "WI" : "IL"}`,
);

export const serviceTowns = serviceAreas.flatMap((area) => area.towns);

export type SearchItem = {
  href: string;
  title: string;
  text: string;
};

export const searchCatalog: SearchItem[] = [
  {
    href: "/",
    title: "Home",
    text: "dog waste removal yard sanitation Kenosha family visits",
  },
  {
    href: "/services",
    title: "Pooptopia Services",
    text: "regular and one-time cleanup packages add-ons",
  },
  {
    href: "/services",
    title: "Pooptopia Premium Package",
    text: "weekly full detailing two technicians sticky spots waste hauled away gate photo",
  },
  {
    href: "/services",
    title: "Pooptopia Prestige Package",
    text: "twice weekly dog waste removal two-person team",
  },
  {
    href: "/services",
    title: "Pooptopia Precision Clean",
    text: "one-time dog waste cleanup one complete detailing",
  },
  {
    href: "/services",
    title: "Paw Protection by Pooptopia",
    text: "yard sanitation add-on",
  },
  {
    href: "/services",
    title: "Pooptopia Playtime Pickup",
    text: "dog let-out playtime waste pickup",
  },
  {
    href: "/services/new-request",
    title: "New Service Request",
    text: "request service get started",
  },
  {
    href: "/gallery",
    title: "Gallery",
    text: gallery.map((item) => item.title).join(" "),
  },
  {
    href: "/about/our-why",
    title: "About Us",
    text: "locally owned family-run since 2023",
  },
  {
    href: "/reviews",
    title: "Reviews",
    text: "google reviews neighbors",
  },
  {
    href: "/about/our-why",
    title: "Our Why",
    text: "family story Olive and Louie",
  },
  {
    href: "/about/videos",
    title: "Pooptopia Videos",
    text: "videos",
  },
  {
    href: "/about/blog",
    title: "Woof to Waste Blog",
    text: `blog yard notes newsletter ${blogPosts.map((post) => post.title).join(" ")}`,
  },
  {
    href: "/faq",
    title: "FAQs",
    text: "questions winter visit waste gate photo",
  },
  {
    href: "/contact",
    title: "Contact",
    text: "6806 55th St. Kenosha WI 53144 phone email admin@pooptopia.dog",
  },
  {
    href: "/sitemap",
    title: "Sitemap",
    text: "all pages on the site",
  },
  {
    href: "/service-index",
    title: "AI Readiness Service Index",
    text: "premium prestige precision clean paw protection playtime pickup packages",
  },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    text: "personal information email phone contact form",
  },
  {
    href: "/ai-policy",
    title: "AI Policy",
    text: "people perform visits photos are from Pooptopia",
  },
];

export type FaqItem = {
  q: string;
  a: string;
  links?: { phrase: string; href: string }[];
};

export const faqs: FaqItem[] = [
  {
    q: "What does Pooptopia do?",
    a: "Pooptopia is a locally owned, family-run dog waste removal and comprehensive yard-care service. Our trained teams provide thorough, year-round cleanup, targeted spot sanitization, and waste haul-away. We keep up with the mess so you have one less chore to think about.",
  },
  {
    q: "Why hire a dog waste removal service?",
    a: "Dog poop keeps accumulating, even when life gets busy. Regular cleanup helps prevent piles from building up and reduces the waste left behind for dogs or people to step in and track elsewhere. Hiring Pooptopia takes an unpleasant, repetitive chore off your to-do list.",
  },
  {
    q: "What makes Pooptopia different?",
    a: "Every visit is handled by a trained two-person team following a detailed cleaning process. We search in perpendicular directions, spot sanitize affected areas, gather and tidy dog toys, bag and haul away the waste, and double-check our work before leaving.\n\nYou also receive service updates, a detailed recap, and a photo of your secured gate or completed yard. And when you have a question, you can reach the real people who run the business.",
  },
  {
    q: "How do you find waste that might be missed?",
    a: "We search each yard using a perpendicular grid pattern: working across the yard in one direction, then searching from another direction. Combined with two sets of eyes and a final check, this helps us find waste that a quick walk-through can overlook.",
  },
  {
    q: "What happens to the waste you collect?",
    a: "We bag it and haul it away. You don’t have to dispose of it yourself or leave it sitting in your trash bin between pickups.",
  },
  {
    q: "What does spot sanitization involve?",
    a: "If dog waste leaves residue, we sanitize the affected area, including appropriate grass and other affected surfaces. This targeted step supports yard hygiene and is part of our regular waste-removal process.",
  },
  {
    q: "Do you sanitize the entire yard at every visit?",
    a: "Our regular dog waste removal includes targeted spot sanitization of affected areas. Paw Protection is a separate sanitation-only service. We can explain the options at your in-person estimate.",
    links: [{ phrase: "Paw Protection", href: "/services#paw-protection" }],
  },
  {
    q: "How do you clean your equipment?",
    a: "If residue gets on equipment during a job, we sanitize it on the spot. We also sanitize all equipment and footwear after every job, before moving to another property.",
  },
  {
    q: "What if you notice something unusual in my dog’s waste?",
    a: "We’ll let you know and share a photo so you can decide whether it needs further attention. We share observations, not diagnoses. We also report yard hazards and other unusual conditions we notice during service.",
  },
  {
    q: "How will I know my visit is complete and my gate is secured?",
    a: "You receive a notification when we arrive and another when the work is complete, along with a detailed recap. If your yard has a gate, we secure it and send a photo confirming it is latched. For yards without a gate, we send a photo of the completed yard.",
  },
  {
    q: "How often do you provide service?",
    a: "The Pooptopia Premium Package provides weekly dog waste removal. The Pooptopia Prestige Package provides twice-weekly visits. Both are recurring services that keep cleanup on a regular schedule throughout the year.",
    links: [
      { phrase: "Pooptopia Premium Package", href: "/services#premium" },
      { phrase: "Pooptopia Prestige Package", href: "/services#prestige" },
    ],
  },
  {
    q: "Do you offer one-time cleanups?",
    a: "Yes. Pooptopia Precision Clean is our one-time dog waste removal service. It’s an option when you need help catching up on accumulated waste. We’ll walk your yard with you at an in-person estimate and discuss the cleanup needed.",
    links: [{ phrase: "Pooptopia Precision Clean", href: "/services#precision-clean" }],
  },
  {
    q: "How do I get started?",
    a: "Complete the service request form with a few details about your dogs and your yard. We’ll arrange an in-person estimate so we can meet you, walk the property, and answer your questions. Once you choose your service, we’ll confirm the next steps.",
    links: [{ phrase: "service request form", href: "/services/new-request" }],
  },
  {
    q: "How soon can my first cleanup happen?",
    a: "We’ll discuss availability when you contact us. The timing depends on your location, our current routes, and the cleanup your yard needs. We’ll confirm scheduling with you before service begins.",
    links: [{ phrase: "contact us", href: "/contact" }],
  },
  {
    q: "Can I choose my service day?",
    a: "Let us know your preferred day. We work established routes and will do our best to accommodate your request. If your service day needs to change, we’ll let you know in advance.",
  },
  {
    q: "What areas do you serve?",
    a: "Pooptopia serves Kenosha, Racine, and Walworth counties in Wisconsin, and Lake County in Illinois. Include your address when you request an estimate so we can confirm availability in your neighborhood.",
    links: [
      {
        phrase: "Kenosha, Racine, and Walworth counties in Wisconsin, and Lake County in Illinois",
        href: "/contact",
      },
    ],
  },
  {
    q: "Can I contact the people who run Pooptopia?",
    a: "Yes. Pooptopia is run by Kim and David Mendlik. You can call, text, or email with questions about your yard or your service. Getting to know our clients and their dogs is part of how we work.",
    links: [
      { phrase: "Kim and David Mendlik", href: "/about/our-why" },
      { phrase: "call, text, or email", href: "/contact" },
    ],
  },
];

export const homeFaqs: FaqItem[] = faqs;

for (const item of faqs) {
  searchCatalog.push({ href: "/faq", title: item.q, text: item.a });
}
