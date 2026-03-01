/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimasi untuk development
  swcMinify: true,
  compiler: {
    removeConsole: false,
  },
  // Faster refresh
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig
