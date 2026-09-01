import type { NextConfig } from "next";
import path from "path";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || repo || "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve("."),
  },
};

export default nextConfig;
