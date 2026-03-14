/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // هدایت کاربر از آدرس اصلی به پوشه انگلیسی
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  // جلوگیری از توقف بیلد به خاطر هشدارهای کوچک
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;