const insertionSort = (arr, getDefaultBarColorArray) => {
  const array = [...arr];
  let length = array.length;

  const steps = [];
  steps.push({
    array : [...array],
    colors : getDefaultBarColorArray(length)
  });

  for (let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;

    // progress
    const colors = getDefaultBarColorArray(length);
    for (let k = 0; k < i; k++){
      colors[k] = '#3c4245';
    }

    // mark current algorithm's position
    if (!(j >= 0 && array[j] > key)){
      colorPosition = [...colors];
      colorPosition[i] = '#fa163f';
      steps.push({
        array : [...array],
        colors : colorPosition
      });
    }

    while (j >= 0 && array[j] > key){
      colorPosition = [...colors];
      colorPosition[j + 1] = '#fa163f';
      steps.push({
        array : [...array],
        colors : colorPosition
      });

      // swap
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;

      j--;
    }
  }

  let finalColors = getDefaultBarColorArray(length);
  for (let k = 0; k < size; k++){
    finalColors[k] = "#3c4245";
  }

  steps.push({
    array : [...array],
    colors : finalColors
  });


  return {
    array,
    steps
  };
}
