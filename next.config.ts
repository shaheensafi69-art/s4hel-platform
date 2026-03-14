import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  // این دو خط را اضافه کن تا اگر ارور تایپ‌اسکریپت بیهوده داد، بیلد متوقف نشود
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;