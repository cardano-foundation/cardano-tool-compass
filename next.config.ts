import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  basePath: isGitHubPages ? '/cardano-tool-compass' : '',
  assetPrefix: isGitHubPages ? '/cardano-tool-compass' : '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig;
