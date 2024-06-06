/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['gimloc.s3.eu-north-1.amazonaws.com', 'gimloc.s3.amazonaws.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
