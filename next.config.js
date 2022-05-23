const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'pbs.twimg.com', 'profile.line-scdn.net', 's.gravatar.com'],
  },
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
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias['~'] = path.resolve(__dirname, './src');
    return config;
  },
};
