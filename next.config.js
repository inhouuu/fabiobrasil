/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: "export",  // <=== enables static export
    reactStrictMode: true
}

module.exports = nextConfig
