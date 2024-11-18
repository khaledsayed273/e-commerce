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
        reactCompiler: true,
        optimizePackageImports: ['@material-tailwind/react', 'swiper/react', 'swiper/modules', 'gsap', 'react-countup'],
    },
};

export default nextConfig;
