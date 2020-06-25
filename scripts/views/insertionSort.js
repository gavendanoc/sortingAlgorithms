
const sort = (arrays, getDefaultBarColorArray) => {
  let solutions = [];
  for (let i = 0; i < arrays.length; i++){
    solutions.push(insertionSort(arrays[i], getDefaultBarColorArray));
  }
  return solutions;
};
