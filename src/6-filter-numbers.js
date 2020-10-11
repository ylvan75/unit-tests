export const filterNumbers = (array, largerThan) => {
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] > largerThan) {
      array.splice(i, 1);
    }
  }
  return array;
};
