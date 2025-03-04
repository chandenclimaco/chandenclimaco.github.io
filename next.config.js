/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // No need for static export or other GitHub Pages specific settings for Vercel
}

module.exports = nextConfig 