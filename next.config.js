// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  output: 'standalone', // Optimizes for containerized environments
  poweredByHeader: false, // Removes the X-Powered-By header
  // Ensures Next.js listens on all network interfaces in production
  experimental: {
    // Improve build time and reduce memory usage
    turbotrace: {
      logLevel: 'error',
    },
  },
};

module.exports = nextConfig;
