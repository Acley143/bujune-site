/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder graphics in public/ are generated SVGs
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
