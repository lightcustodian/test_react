/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For self-hosting
  experimental: {
    typedRoutes: true, // Better TypeScript support
  },
  images: {
    domains: [], // Add any external image domains as needed
  },
  // For self-hosting optimization
  trailingSlash: true,
  // Disable x-powered-by header for security
  poweredByHeader: false,
  // Optimize for static export where possible
  distDir: '.next',
}

export default nextConfig