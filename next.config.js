/** @type {import('next').NextConfig} */
const nextConfig = {
  // map hosting env variables to nextjs env variables
  env: {
    NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SECRET: process.env.SECRET,
  },
};

module.exports = nextConfig;
