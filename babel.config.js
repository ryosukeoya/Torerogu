'use strict';
/**
babel.config.js with useful plugins. 
*/
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
    // ['@babel/preset-env', { targets: { node: 'current' } }],
  ];
  const plugins = [['@emotion/babel-plugin']];

  return {
    presets,
    plugins,
  };
};
