import { blogPosts } from "@/lib/blog";

export const REQUEST_URL = "/services/new-request";

export const ADDRESS_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("6806 55th St., Kenosha, WI 53144");

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/pooptopia/" },
  { label: "Instagram", href: "https://www.instagram.com/princessolive_n_sirlouie/" },
  { label: "X", href: "https://www.x.com/Pooptopia2023" },
  { label: "Yelp", href: "https://www.yelp.com/biz/pooptopia-kenosha?osq=pooptopia" },
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
      { href: "/about/service-area", label: "Service Area" },
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
      { href: "/about/service-area", label: "Service Area" },
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
    href: "/about/service-area",
    title: "Service Area",
    text: `${serviceCounties.join(" ")} ${serviceTowns.join(" ")}`,
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

export const faqs = [
  {
    q: "Why hire a pooper scooper?",
    a: "Hiring a pooper scooper protects your dog's health by keeping the yard clean, reducing the risk of parasites, and preventing the spread of disease. It also gives you back the time and the yard you were losing to the chore.",
  },
  {
    q: "What makes Pooptopia different?",
    a: "We combine thorough cleanup with personalized care and clear communication. Our two-person team searches your lawn using a perpendicular grid pattern to help ensure no pile is missed.",
  },
  {
    q: "Do you provide an in-person estimate?",
    a: "Yes! We start with an in-person estimate to assess your yard’s unique needs and tailor our service to your property.",
  },
  {
    q: "How will I know when my yard has been serviced?",
    a: "You’ll receive weekly reminders, real-time arrival and departure notifications, and an update with photos after each visit.",
  },
  {
    q: "Will you make sure my gate is securely closed?",
    a: "Absolutely. If your yard has a gate, we’ll confirm that it’s securely latched after each visit and include a photo for your peace of mind.",
  },
  {
    q: "Do you take care of my dog’s toys, too?",
    a: "Yes! We also tidy up your dog’s toys, leaving their playground clean and ready for play.",
  },
  {
    q: "Will you let me know if you notice anything unusual in my dog’s waste?",
    a: "Yes. If we notice anything abnormal during cleanup, we’ll notify you promptly so you can decide whether to follow up with your veterinarian.",
  },
  {
    q: "How soon can you be here to clean up my lawn?",
    a: "We always do our best to accommodate new clients in our service area as soon as possible, based on your location and the time the job will take.",
  },
  {
    q: "Do you offer one-time service?",
    a: "Yes. Our Precision Clean is a one-time dog waste pickup. The rate depends on how long it's been since the yard was last cleared. We'll confirm it at your in-person estimate.",
  },
  {
    q: "How do I start service?",
    a: "Fill out the short service request form. It gives us what we need to build your estimate. Once you approve it, we schedule the date and time of your first visit.",
  },
  {
    q: "What areas do you serve?",
    a: "We provide dog waste removal in Kenosha County, Racine County, and Walworth County in Wisconsin, and Lake County in Illinois, including Kenosha, Racine, Union Grove, Sommers, East Troy and more.",
  },
  {
    q: "How often do you clean your equipment?",
    a: "Dog waste is hazardous material, so we take this seriously. After every use our rake, bucket, and footwear are thoroughly disinfected with veterinarian-grade KennelSol.",
  },
  {
    q: "Can I choose my day of service?",
    a: "We'll do our best to accommodate requests, but we run established routes so we're in specific areas on certain days. Routes are occasionally reconfigured to keep costs low, which means your service day can change, and we'll always tell you in advance.",
  },
  {
    q: "How often do you provide service?",
    a: "We offer weekly service with the Pooptopia Premium Package and twice-weekly service with the Pooptopia Prestige Package. Contact us for a personal quote if you want a different frequency.",
  },
  {
    q: "How much do people pay for dog poop pickup?",
    a: "With our premium service you get a thorough job: we look for hidden waste, disinfect areas, double-check our work, and clean our equipment after every job. You also get reminders, arrival and completion updates, and a photo confirming your gate is latched. You get what you pay for.",
  },
  {
    q: "Can I have more than one visit per week?",
    a: "Yes. Select the Pooptopia Prestige Package on the new service request for twice-weekly visits.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "We ask new recurring clients to sign a term agreement, which is what lets us lock your price for 12 months. One-time Precision Clean service does not require a contract.",
  },
];

for (const item of faqs) {
  searchCatalog.push({ href: "/faq", title: item.q, text: item.a });
}
