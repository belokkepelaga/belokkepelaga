/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            ext: 'tsx',
            svgoConfig: { plugins: ['prefixIds'] },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
