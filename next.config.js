/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // This allows for the language value to be passed in HTML
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
