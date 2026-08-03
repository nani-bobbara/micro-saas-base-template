/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		externalDir: true
	},
	transpilePackages: ["@packages/adapters-db"]
};

export default nextConfig;
