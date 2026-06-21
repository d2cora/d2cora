import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* force reload */
  // @ts-expect-error - Typescript is not recognizing eslint in NextConfig
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;

