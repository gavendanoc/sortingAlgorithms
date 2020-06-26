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
