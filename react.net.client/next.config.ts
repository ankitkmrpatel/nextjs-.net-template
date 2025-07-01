import type { NextConfig } from "next";

import { env } from 'process';

const target = env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
    : env.ASPNETCORE_URLS
        ? env.ASPNETCORE_URLS.split(';')[0]
        : 'https://localhost:7248';

console.log("Env Data", target);

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${target}/:path*`,
            },
        ]
    },
};

export default nextConfig;