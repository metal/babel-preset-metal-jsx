'use strict';

module.exports = {
  plugins: [
    [
      'incremental-dom',
      {
        components: true,
        prefix: 'IncrementalDOM',
        runtime: 'iDOMHelpers'
      }
    ]
  ],
  presets: [
    require('babel-preset-metal')
  ]
};
