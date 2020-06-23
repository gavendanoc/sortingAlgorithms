// create few_unique_array
const makeFewUniqueArray = (size) => {
  const uniqueValues = 5;
  const fewUniqueArray = [];
  let initialValue = 0;

  for (let i = 0; i < size; i++){
    if (i % Math.floor(size / uniqueValues) == 0 ) {
      initialValue++;
    }
    fewUniqueArray.push(initialValue);
  }
  return fewUniqueArray;
};

const makeReversedArray = (size) => {
  const reversedArray = [];

  for (let i = size; i > 0; i--){
    reversedArray.push(i);
  }

  return reversedArray;
};

const makeRandomArray = (size) => {
  const orderedArray = [];
  for (let i = 1; i <= size; i++ ){
    orderedArray.push(i);
  }

  return shuffle(orderedArray);
};

const makeNearlySortedArray = (size) => {
  const nearlySortedArray = [];

  for (let i = 1; i <= size ; i++){
    nearlySortedArray.push(i);
  }

  // swap a little bit
  for (let i = 0; i < Math.floor(size * 2); i++){
    const idx = Math.floor(Math.random() * (size - 1));
    const temp = nearlySortedArray[idx];
    nearlySortedArray[idx] = nearlySortedArray[idx + 1];
    nearlySortedArray[idx + 1] = temp;
  }
  return nearlySortedArray;
};


// draw in page


/**
// draw in page
reversedBars = createBars("reversed-array", size);
drawBars(reversedArray, reversedBars, size, createBlacks(size));


// draw random arrays
randomBars = createBars("random-array", size);
drawBars(randomArray, randomBars, size, createBlacks(size));


// draw nearly sorted arrays
nearlySortedBars = createBars("nearly-sorted-array", size);
drawBars(nearlySortedArray, nearlySortedBars, size, createBlacks(size));
*/
