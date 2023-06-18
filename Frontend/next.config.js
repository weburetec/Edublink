/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://api.geniebiz.lk/public/v2/transactions",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
