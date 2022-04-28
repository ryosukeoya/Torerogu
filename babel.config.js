'use strict';

module.exports = function (api) {
  api.cache(true);
  api.assertVersion('^7.4.5');
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
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ];
  const plugins = [['@emotion/babel-plugin']];

  return {
    presets,
    plugins,
  };
};
