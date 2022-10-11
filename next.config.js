/** @type {import('next').NextConfig} */
// const dotenv = require('dotenv');

const nextConfig = {
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    UPLOAD_CARE_PUBLIC_KEY: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY,
    STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'ucarecdn.com', 'placeimg.com'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // webpack: (config, { dev, webpack }) => {
  //   /* getting env variables from our internal defined files */
  //   const fileEnv = dotenv.config({ path: process.env.TYPE ? `envs/.${process.env.TYPE}.env` : `envs/.env` }).parsed;
  //   /* getting environments from Code Build */
  //   const codeBuildEnv = dotenv.config({ path: `.env` }).parsed;
  //   const { NEXT_PUBLIC_BACKEND_URL, NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY, NEXT_PUBLIC_STRIPE_PUBLIC_KEY, NEXT_PUBLIC_SENDGRID_API_KEY } = codeBuildEnv
  //   let mergedEnv = { ...fileEnv, NEXT_PUBLIC_BACKEND_URL, NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY, NEXT_PUBLIC_STRIPE_PUBLIC_KEY, NEXT_PUBLIC_SENDGRID_API_KEY };
  //   const envKeys = Object.keys(mergedEnv).reduce((prev, next) => {
  //     prev[`process.env.${next}`] = JSON.stringify(mergedEnv[next]);
  //     return prev;
  //   }, {});
  //   config.plugins.push(new webpack.DefinePlugin(envKeys))
  // }
};

module.exports = nextConfig;
