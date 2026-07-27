/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local generated placeholder graphics are SVGs
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
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
