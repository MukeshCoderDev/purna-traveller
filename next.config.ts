import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",               // was "standalone" → now builds static /out folder
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  devIndicators: false,
  images: {
    unoptimized: true,            // required for static hosting (YouTube thumbs still load fine)
  },
};

export default nextConfig;
