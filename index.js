'use strict';

module.exports = {
  plugins: [
    [
      require('babel-plugin-incremental-dom'),
      {
        components: true,
        namespaceAttributes: true,
        prefix: 'IncrementalDOM',
        runtime: 'iDOMHelpers'
      }
    ]
  ]
};
