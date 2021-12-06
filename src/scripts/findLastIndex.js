const findLastIndex = (array, predicate) => {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
};

export default findLastIndex;
