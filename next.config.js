/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["raw.githubusercontent.com"]
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: ['pokeapi.co','raw.githubusercontent.com'],
    //     port: '',
    //     pathname: '/imgs/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
