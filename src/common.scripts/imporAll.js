/* eslint-disable */
const importAll = (
  r = require.context('@library/', true, /.+\.(sass|js)$/)
) => {
  r.keys().forEach((k) => r(k));
};

export default importAll;

