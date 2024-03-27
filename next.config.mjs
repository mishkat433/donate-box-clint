/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['bg_1.jpg.webp', 'bg_2.jpg.webp', 'bg_3.jpg.webp', 'bg_4.jpg.webp', 'h1_hero1.jpg.webp', 'h1_hero2.jpg.webp'],
        unoptimized: true
    },
};

export default nextConfig;
