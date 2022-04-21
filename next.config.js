/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    UPLOAD_CARE_PUBLIC_KEY: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY,
    STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'ucarecdn.com'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
