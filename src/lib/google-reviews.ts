export type GoogleReview = {
  id: string;
  author: string;
  authorUrl: string;
  photoUrl: string | null;
  rating: number;
  headline: string;
  text: string;
  relativeTime: string;
};

export type GoogleReviewFeed = {
  name: string;
  rating: number | null;
  total: number | null;
  mapsUrl: string;
  reviews: GoogleReview[];
};

type PlaceDetails = {
  displayName?: { text?: string };
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: {
    name?: string;
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }[];
};

function recencyRank(relativeTime: string) {
  const text = relativeTime.toLowerCase();
  const amount = Number(text.match(/\d+/)?.[0] ?? 1);
  if (text.includes("minute") || text.includes("hour") || text.includes("just now")) return amount / 24;
  if (text.includes("yesterday")) return 1;
  if (text.includes("day")) return amount;
  if (text.includes("week")) return amount * 7;
  if (text.includes("month")) return amount * 30;
  if (text.includes("year")) return amount * 365;
  return Number.MAX_SAFE_INTEGER;
}

function byNewest(reviews: GoogleReview[]) {
  return reviews
    .map((review, order) => ({ review, order }))
    .sort(
      (a, b) => recencyRank(a.review.relativeTime) - recencyRank(b.review.relativeTime) || a.order - b.order,
    )
    .map((item) => item.review);
}

const PLACE_ID = "ChIJmYLCrYQCo6IRdFrNg2S6fcI";
const MAPS_FALLBACK = `https://www.google.com/maps/search/?api=1&query=Pooptopia&query_place_id=${PLACE_ID}`;
/** Google Maps place page with the Reviews tab open (`!9m1!1b1`). */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Pooptopia/@42.5860057,-87.8893958,17z/data=!4m8!3m7!1s0xa2a30284adc28299:0xc27dba6483cd5a74!8m2!3d42.5860057!4d-87.8893958!9m1!1b1!16s%2Fg%2F11vytnxdx2";
const REVIEW_LIMIT = 30;

const savedReviews: GoogleReview[] = [
  ["taryn-ross", "Taryn Ross", "Above and beyond for yard cleanup", "Kim and David go above and beyond - we highly recommend this team for yard clean up!", "4 months ago"],
  ["andrea-lowe", "andrea lowe", "Weekly cleanup our dogs approve", "I saw a flyer for Pooptopia at our vet’s office and thought, what the heck, I’ll give them a call and see what the scoop is. Neither my husband nor I like picking up the poops so this service was a no brainer. The team is always on time or early and communicate everything (via text was my preference), they clean up, sanitize, and let us know if anything looks off with the poops. Absolutely recommend Pooptopia, we have them come out weekly but if you have a few dogs they offer twice a week too!\n\nPooptopia is Grizz and Millie approved, even if they bark at the girls when they’re here 😆", "4 months ago"],
  ["shannon-dwyer", "Shannon Dwyer", "Friendly, reliable, and went the extra mile", "⭐⭐⭐⭐⭐\n\nPooptopia is fantastic! Their team is always friendly, reliable, and does a great job keeping our yard clean. They even pulled some weeds for me during their visit, which was completely unexpected and so appreciated.\n\nIt’s clear they truly care about their customers and take pride in their work. I highly recommend Pooptopia to anyone looking for dependable, professional service!", "4 months ago"],
  ["carrie-karich", "Carrie Karich", "Always ready for company", "Kim & David do a wonderful job removing my large Goldendoodles waste from my yard. They are very thorough and efficient. Communication is amazing. I love having a clean yard and I’m always ready for company without having to worry about cleaning the yard first. I highly recommend this service to anyone with a dog!", "4 months ago"],
  ["elizabeth-modder", "Elizabeth Modder", "Care that goes beyond the job", "Pooptopia really is the best, and I don’t say that lightly. There’s something about the way they operate that feels rare: the care is real, the attention to detail is thoughtful and consistent, and everything they do is grounded in a kind of quiet integrity you don’t often come across anymore. But more than anything, it’s how much they genuinely love dogs, you can feel it in every interaction.\n\nIf you love your “poopers” the way I love mine, reach out to Pooptopia. They don’t just do the job, they show up with a level of care that goes beyond what you even knew to expect.", "5 months ago"],
  ["catherine-johnson", "Catherine Johnson", "The best thing to happen to my yard", "The Best Thing to Happen to My Yard!\nI've been using Pooptopia for their weekly dog poop removal service, and they do an absolutely amazing job! My yard is clean, fresh, and completely poop-free every week without me having to lift a finger. They are reliable, thorough, and never miss a spot. It's such a game-changer, I can actually enjoy my yard again! If you have dogs and are tired of dealing with the mess, do yourself a favor and call Pooptopia. You won't regret it! Highly recommend! 🐾💩✨", "5 months ago"],
  ["edmond-dallas", "Edmond Dallas", "Quick spring cleanup, clear communication", "After searching for someone to do a Spring Clean up, Pooptopia was quick on the response and had first appointment scheduled. They are commited to providing excellent customer service.\nHave been using their service for close to 4 months. They provide detail information about arrival times and after service picture proof along with any information regarding their clean up. Have had no issues with using them and would highly recommend Pooptopia.\nThanks for providing great service Kim & David.", "5 months ago"],
  ["ann", "Ann", "Responsive, efficient, and detail oriented", "They are very responsive, efficient and detail oriented.", "5 months ago"],
  ["justin", "Justin", "Fast winter cleanup for less than quoted", "Over winter my doggy left a lot of doggy landmines. Pooptopia was fast cleaning up, price ended up being cheaper than the quote. They cleaned up all his toys and even is chewing sticks that feel from the trees.", "5 months ago"],
  ["nicole-visintainer", "Nicole Visintainer", "Professional, kind, and judgment-free", "Pooptopia is an excellent and very professional service from start to finish! They are reasonable in price too! I was embarrassed about our yard and how I let it go over winter and couldnt keep up with it and they were understanding and not judgmental whatsoever and helped me feel better about it.I was so thankful to have found them to help!!! I will definitely be continuing services with them in the future! They even brought dog treats for our doggies too!\n\nChoose Pooptopia\nYou wont be disappointed", "5 months ago"],
  ["j-w", "J W", "Thorough cleanup and sanitizing", "Kim, David and staff are not only wonderful people to work with, but they do such a thorough job cleaning up after the dogs and sanitizing each of the areas.\nWe really appreciate the services they provide!", "5 months ago"],
  ["debbie-marino", "Debbie Marino", "Great communication and written reports", "Kim and her husband are absolutely wonderful! They have great communication and do an excellent job cleaning up & sanitizing the Poop.\nThey give you a heads up when they will arrive, what they did and then a written report as well.\nThey’re just great & we’re very happy!", "5 months ago"],
  ["mr-and-mrs-vinson", "Mr. and Mrs. Vinson", "Smooth, professional, and fair pricing", "I had a great experience with Pooptopia from start to finish. The team provided excellent service, maintained a high level of professionalism, and made the entire process smooth and stress-free. Their pricing was very fair and affordable, especially given the quality of work delivered. I truly appreciated their courteous and knowledgeable approach and would highly recommend them to anyone looking for reliable service at a great value.”", "6 months ago"],
  ["karlee-kraning", "Karlee Kraning", "Friendly service that went above and beyond", "Great customer service and very friendly. They went above and beyond to help clean the yard. We are very appreciative of this service!", "6 months ago"],
  ["josh-quinn", "Josh Quinn", "Yard back in shape—with homemade treats", "Fast, friendly, and communicative! They helped this lazy bachelor get his yard back in shape. And now, Princeton and Clyde can run freely once again! They even sent homemade poop shaped treats with a handwritten card. Now come on… Who does that in this day and age?? Thank you so much!", "6 months ago"],
  ["novella-velasquez", "Novella Velasquez", "Detailed, with an in-person quote", "Extremely detailed and excellent communicators! Very happy with the service and that they came to do a physical inspection before quoting, plus sanitizing was included in the price. Will be using again very soon!", "7 months ago"],
  ["tommy-odonnell", "Tommy O'Donnell", "Very professional service", "Very professional service!", "7 months ago"],
  ["michelle-leith", "Michelle Leith", "Amazing, friendly, perfect job", "Amazing service, soooo friendly , perfect job done !!!  Completely recommend !!!", "7 months ago"],
  ["lauren-s", "Lauren S", "Great customer service", "Great customer service, very happy with the service!", "7 months ago"],
  ["shelly-weeks", "Shelly Weeks", "Excellent cleaning and sanitizing", "They are fabulous! Great communication through the process, start to finish. They do an excellent job cleaning and sanitizing the yard! Highly recommend them!", "7 months ago"],
  ["katie-brekke", "Katie Brekke", "Fast estimate, went above and beyond", "Pooptopia is amazing!  They were quick to respond to my initial request and came to give me an in-person estimate within days.  On the day of service they went above and beyond just a simple yard clean up and I am so appreciative of everything they did!  I tell everyone I know how amazing they are!  I will definitely be using them again in the future.", "7 months ago"],
  ["dylan-petersen", "Dylan Petersen", "Great service and communication", "Great service and communication, highly recommend .", "7 months ago"],
  ["nik-stephens", "nik stephens", "If you have dogs, you need this", "5 stars all the way!!! If you have dogs, you NEED this service! They’re dependable, efficient, and make life so much easier. No mess, no hassle, just a clean yard every time. I’m so glad I found them!", "7 months ago"],
  ["cate-migacz", "Cate Migacz", "Text alerts, cleaned and sanitized", "Kim, David and the Pooptopia team are fantastic!  They send text alerts and reminders on when they are coming.  My yard is not only cleaned but sanitized as well.  We have been so happy using Pooptopia!", "7 months ago"],
  ["gail-feick", "Gàil Feick", "Nothing overlooked, gates secured", "Pooptopia ia the best!  From owners, Dave & Kim, to their team, to their process, their services are amazing!  Nothing is overlooked and all is documented after each visit. Very professionally done, and I have no concerns about gates being completely closed. They care about my dogs and their health, so everything is meticulously cleaned up and sanitized. Dave & Kim are wonderful people and I highly recommend Pooptopia!  Also have wonderful, healthy dog treats available for purchase that my dogs also give 5 stars!", "7 months ago"],
  ["john-wernecke", "John Wernecke", "Messy yard looks brand new", "This is a great service and the owners are amazing. Very involved and communicative. I highly recommend their services. My yard was a mess and it looks brand new now.", "9 months ago"],
  ["renee-olshefski", "Renee Olshefski", "Thorough, professional, excellent communication", "Pooptopia does a wonderful job! Very thorough and professional. Excellent communication. I definitely recommend this company.", "Edited 9 months ago"],
  ["tom-carlson", "Tom Carlson", "Our four dogs love them", "We started using Pooptopia this year. The work David and Kim do is great. We get notifications with the time they will arrive and the finish time with photos including the closed gate. Our four dogs love them.\n\nYou can tell they love dogs. I would recommend them to everyone.", "11 months ago"],
  ["emily-bridleman", "Emily Bridleman", "On time—and they haul it all away", "The Pooptopia team is great!! Really good communication, always on time and they take great care when cleaning up our yard! Highly recommended and the best part is they haul it all away and we don’t have to worry about it!", "a year ago"],
  ["angel-bucher", "Angel Bucher", "Gate photos and responsible service", "We receive photo of our gate locked and anything that is out of the ordinary. They are always on time or send a text if they will be late. I am so glad to have found a doggie clean up service that is considered and responsible as they are.", "a year ago"],
].map(([id, author, headline, text, relativeTime]) => ({
  id,
  author,
  authorUrl: MAPS_FALLBACK,
  photoUrl: null,
  rating: 5,
  headline,
  text,
  relativeTime,
}));

export async function getGoogleReviews(): Promise<GoogleReviewFeed | null> {
  return {
    name: "Pooptopia",
    rating: 5,
    total: 75,
    mapsUrl: GOOGLE_REVIEWS_URL,
    reviews: byNewest(savedReviews).slice(0, REVIEW_LIMIT),
  };
}
