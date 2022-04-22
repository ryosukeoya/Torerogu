const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  pageExtensions: ['p.tsx', 'p.ts'],
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname, './src');
    return config;
  },
};