import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Application 100% côté client : pas de backend, aucune donnée patient persistée.
  reactStrictMode: true,
};

export default nextConfig;
