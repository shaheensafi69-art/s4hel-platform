/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // مانع توقف بیلد توسط خطاهای ESLint می‌شود
    ignoreDuringBuilds: true,
  },
  typescript: {
    // مانع توقف بیلد توسط خطاهای تایپ‌اسکریپت می‌شود
    ignoreBuildErrors: true,
  },
};

export default nextConfig;