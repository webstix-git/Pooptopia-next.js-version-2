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
    ];
  },
};

export default nextConfig;
