import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'techcrunch.com',
      'i.insider.com', // Add this domain
      'gizmodo.com',
      'opengraph.githubassets.com',
      'thingspool.net',
      'zverok.space',
      'dillonshook.com',
      's.yimg.com',
      // Add any other relevant domains here
    ],
  },
  // other configurations
};

export default nextConfig;
