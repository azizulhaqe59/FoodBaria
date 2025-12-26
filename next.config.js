/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  images: {
    domains: [
      "dev.foodbaria.com",
      "web.foodbaria.com",
    ],
  },
};

module.exports = nextConfig;