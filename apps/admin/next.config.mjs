// TODO: Configure Next.js for admin app
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
  // TODO: Configure headers (stricter CSP for admin)
  // TODO: Enable output: "standalone" for Docker deployment
};

export default nextConfig;
