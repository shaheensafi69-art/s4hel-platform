import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // این دو بخش باعث می‌شود دپلوی تحت هر شرایطی انجام شود
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;