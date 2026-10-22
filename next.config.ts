import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/about/blog/why-do-my-dog%E2%80%99s-feet-smell-like-fritos",
        destination: "/about/blog/why-do-my-dogs-feet-smell-like-fritos",
        permanent: true,
      },
      {
        source: "/about/blog/diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dog%E2%80%99s-mind",
        destination: "/about/blog/diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dogs-mind",
        permanent: true,
      },
      {
        source: "/about/blog/new-year%E2%80%99s-resolutions-health-goals-for-dogs-in-2025",
        destination: "/about/blog/new-years-resolutions-health-goals-for-dogs-in-2025",
        permanent: true,
      },
      {
        source: "/about/blog/protecting-your-dog%E2%80%99s-paws-in-winter-tips-for-happyhealthy-feet",
        destination: "/about/blog/protecting-your-dogs-paws-in-winter-tips-for-happyhealthy-feet",
        permanent: true,
      },
      {
        source: "/about/blog/why-dogs-eat-poop-the-smelly-truth-we-can%E2%80%99t-ignore",
        destination: "/about/blog/why-dogs-eat-poop-the-smelly-truth-we-cant-ignore",
        permanent: true,
      },
      {
        source: "/about/blog/winter-weight-management-adjusting-your-dog%E2%80%99s-diet-and-exercise",
        destination: "/about/blog/winter-weight-management-adjusting-your-dogs-diet-and-exercise",
        permanent: true,
      },
      {
        source: "/about/blog/year-in-review-celebrating-your-dog%E2%80%99s-wins-in-2024",
        destination: "/about/blog/year-in-review-celebrating-your-dogs-wins-in-2024",
        permanent: true,
      },
      {
        source: "/about/blog/the-science-behind-dog-poop-what-your-dog%E2%80%99s-poop-can-tell-you",
        destination: "/about/blog/the-science-behind-dog-poop-what-your-dogs-poop-can-tell-you",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
