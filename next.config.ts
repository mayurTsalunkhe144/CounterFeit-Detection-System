import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      child_process: false,
      fs: false, // if you're seeing 'fs' errors too
      net: false,
      tls: false,
    };
    return config;
  },
  /* config options here */
};

export default nextConfig;
