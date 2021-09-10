/* eslint-disable-next-line */
const inits = require.context('@library', true, /.*-init\.js$/, 'lazy');

inits.keys().forEach((k) => inits(k).then((init) => init.default()));

