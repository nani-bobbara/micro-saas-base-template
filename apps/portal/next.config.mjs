// TODO: Configure Next.js for portal app
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: Add transpilePackages for workspace packages
  transpilePackages: [
    "@micro-saas/ui",
    "@micro-saas/auth",
    "@micro-saas/domain",
    "@micro-saas/application",
  ],
  // TODO: Configure image domains
  // TODO: Configure headers (CSP, CORS)
  // TODO: Enable output: "standalone" for Docker deployment
};

export default nextConfig;
