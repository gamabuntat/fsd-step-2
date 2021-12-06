const calcDecimalPlaces = (n) => {
  const sn = String(n);
  const pointIndex = sn.indexOf('.');
  return pointIndex === -1 ? 0 : sn.slice(pointIndex + 1).length;
};

export default calcDecimalPlaces;
