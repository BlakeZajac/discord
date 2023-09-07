/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutiil: "commonjs bufferutil"
        });

        return config;
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uploadthing.com"
            },
        ],
    },

};

module.exports = nextConfig;