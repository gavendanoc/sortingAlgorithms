const redMarker = '#fa163f';
const blackMarker = '#3c4245';

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
      colors[k] = blackMarker;
    }

    // mark current algorithm's position
    if (!(j >= 0 && array[j] > key)){
      colorPosition = [...colors];
      colorPosition[i] = redMarker;
      steps.push({
        array : [...array],
        colors : colorPosition
      });
    }

    while (j >= 0 && array[j] > key){
      colorPosition = [...colors];
      colorPosition[j + 1] = redMarker;
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
  for (let k = 0; k < length; k++){
    finalColors[k] = blackMarker;
  }

  steps.push({
    array : [...array],
    colors : finalColors
  });


  return {
    array,
    steps
  };
};



const bubbleSort = (arr, getDefaultBarColorArray) => {
  const array = [...arr];
  let length = array.length;
  let i = length;
  let swaped = false;

  const steps = [];
  steps.push({
    array : [...array],
    colors : getDefaultBarColorArray(length)
  });

  do {
    swaped = false;

    // progress
    const progress = getDefaultBarColorArray(length);
    for (let k = i; k < length; k++){
      progress[k] = blackMarker;
    }


    for (let j = 0; j < i; j++){
      const colors = [...progress];
      colors[j] = redMarker;
      steps.push({
        array : [...array],
        colors : colors
      });

      if (array[j] > array[j + 1]){
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swaped = true;
      }
    }

    i--;
  } while (swaped);

  let finalColors = getDefaultBarColorArray(length);
  for (let k = 0; k < length; k++){
    finalColors[k] = blackMarker;
  }

  steps.push({
    array : [...array],
    colors : finalColors
  });

  return {
    array,
    steps
  };
};

const merge = (arr, left, middle, right, getDefaultBarColorArray, steps, colors) => {
  const leftArr = arr.slice(left, middle);
  const rightArr = arr.slice(middle, right);

  let l = leftArr.length - 1;
  let r = rightArr.length - 1;

  for (let k = right - 1; k >= left; k--){
    if (r < 0 || leftArr[l] > rightArr[r]){
      arr[k] = leftArr[l--];
    } else {
      arr[k] = rightArr[r--];
    }

    colors[k] = redMarker;
    steps.push({
      array: [...arr],
      colors: [...colors]
    });
    colors[k] = blackMarker;
  }
};

const mergeSortHelper = (arr, start, end, getDefaultBarColorArray, steps, colors) => {
  if (start >= end - 1) return;

  const middle = Math.floor((start + end) / 2);
  mergeSortHelper(arr, start, middle, getDefaultBarColorArray, steps, colors);
  mergeSortHelper(arr, middle, end, getDefaultBarColorArray, steps, colors);
  merge(arr, start, middle, end, getDefaultBarColorArray, steps, colors);
};

const mergeSort = (arr, getDefaultBarColorArray) => {
  const array = [...arr];
  const steps = [];
  const colors = [...getDefaultBarColorArray(arr.length)];

  mergeSortHelper(array, 0, array.length, getDefaultBarColorArray, steps, colors);

  colors[0] = blackMarker;
  steps.push({
    array : [...array],
    colors : [...colors]
  });

  return {
    array,
    steps
  }
};
