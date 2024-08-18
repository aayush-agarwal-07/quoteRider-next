/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
    // Or if you want to enforce ESLint during production builds, use:
    // ignoreDuringBuilds: false,
  },
};

export default nextConfig;
