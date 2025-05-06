/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cactuscloudmedia.com'],
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
}

module.exports = nextConfig 