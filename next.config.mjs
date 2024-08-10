
/** @type {import('next').NextConfig} */
const nextConfig = {
    strictMode: false,
    // webpack: (config, options) => {
    //     if (!options.isServer) {
    //       //letter addition - graeme graylien change
    //       config.resolve.fallback.fs = false;
    //       config.resolve.fallback.net = false;
    //       config.resolve.fallback.tls = false;
    //       config.resolve.fallback.dns = false;
    //     }
    //     return config;
    //   },
};


export default nextConfig;
