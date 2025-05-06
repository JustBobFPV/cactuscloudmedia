/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cactuscloudmedia.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig 