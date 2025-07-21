import type { NextConfig } from "next";

const nextConfig = {
  basePath: '/cardano-tool-compass',
  assetPrefix: '/cardano-tool-compass',
  output: 'export', // Required for static export to GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  }
}

export default nextConfig;
