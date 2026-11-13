import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/mr',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mr/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/best-digital-marketing-agency-in-roorkee',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/best-digital-marketing-agency-in-khatima',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/history-evolution-of-d2c-india-boom',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

