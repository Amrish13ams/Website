/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // Enables static HTML export
  distDir: 'out', // Output directory for the static build
  images: {
    unoptimized: true, // Required for static export
  },
  // Add basePath if your GitHub Pages site is not at the root domain
  // e.g., if your repo is username.github.io/repo-name, use:
  basePath: process.env.NODE_ENV === 'production' ? '/mcsakar' : '',
  // This adds trailing slashes to URLs
  trailingSlash: true,
}

export default nextConfig
