/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyjson.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
                pathname: '/**',
            },

        ],
    },
    experimental: {
        optimizePackageImports: ['swiper/react', 'swiper/modules', 'gsap', 'react-countup'],
    },
    rewrites: async () => {
        return [
            {
                source: "/script.js",
                destination: "https://cloud.umami.is/script.js",
            },
        ];
    },
};

export default nextConfig;
