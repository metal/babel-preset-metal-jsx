'use strict';

module.exports = {
  plugins: [
    [
      'incremental-dom',
      {
        components: true,
        namespaceAttributes: true,
        prefix: 'IncrementalDOM',
        runtime: 'iDOMHelpers'
      }
    ]
  ]
};
