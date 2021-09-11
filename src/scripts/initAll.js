/* eslint-disable-next-line */
const inits = require.context('@library', true, /.*-init\.js$/);
inits.keys().forEach((k) => inits(k).default());

