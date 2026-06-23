import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/tjanster", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
