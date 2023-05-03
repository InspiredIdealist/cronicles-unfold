/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        config.experiments = { asyncWebAssembly: true, layers: true };

        return config;
    },
    generateEtags: false,
    poweredByHeader: false,
    devIndicators: {
        autoPrerender: false
    }
}

module.exports = nextConfig
