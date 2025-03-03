/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enables static HTML export
  // Set the base path to match GitHub Pages repository name if not using a custom domain
  // Remove this line if using a custom domain or if this is a username.github.io repository
  // basePath: '/chandenclimaco.github.io',
  
  // Disable image optimization since it's not supported in static exports
  // This is already handled by unoptimized: true above
}

module.exports = nextConfig 