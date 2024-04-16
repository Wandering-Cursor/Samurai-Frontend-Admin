/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  transpilePackages: [
    "@/components",
  ]
};

export default nextConfig;
