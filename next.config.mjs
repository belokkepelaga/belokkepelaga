/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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

    config.module.rules.push({
      test: /pdf\.worker\.min\.js$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;
