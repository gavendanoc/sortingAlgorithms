/*
    General Functions
*/


const size = 40;

const updateItemHeight = (size) => {
  /* Not readable, fix later*/
  const divfewUniqueArrayArea = document.getElementsByClassName("few-unique-array")[0];
  const height = divfewUniqueArrayArea.getBoundingClientRect().height;
  const root = document.documentElement;
  const itemHeight = Math.floor(0.5 * (height / size));
  root.style.setProperty("--item-height", `${itemHeight}px`);
};

updateItemHeight(size);


window.addEventListener('resize', () => {
  updateItemHeight(size);
});

const createBars = (arrayClass, size) => {
  const divArray = document.getElementsByClassName(arrayClass)[0];
  const bars = []

  for (let i = 0; i < size; i++){
    const bar = document.createElement("div");
    bar.className += "item";

    divArray.appendChild(bar);
    bars.push(bar);
  }

  return bars;
};

const createBlacks = (size) => {
  blacks = [];
  for (let i = 0; i < size ; i++){
    blacks.push('#888888');
  }
  return blacks;
};

const drawBars = (array, bars, size, color) => {
  const min = Math.min(...array);
  const max = Math.max(...array);

  for (let i = 0; i < size; i++){
    const width = map(array[i], min, max, 10, 90);

    bars[i].style.width = `${width}%`;
    bars[i].style.backgroundColor = color[i];
  }
};


// create few_unique_array
const uniqueValues = 4;
const fewUniqueArray = [];
let initialValue = 0;

for (let i = 0; i < size; i++){
  if (i % Math.floor(size / uniqueValues) == 0 ) {
    initialValue++;
  }
  fewUniqueArray.push(initialValue);
}

// draw in page
fewUniqueBars = createBars("few-unique-array", size);
drawBars(fewUniqueArray, fewUniqueBars, size, createBlacks(size));

// create reversed arrays
const reversedArray = [];

for (let i = size; i > 0; i--){
  reversedArray.push(i);
}

// draw in page
reversedBars = createBars("reversed-array", size);
drawBars(reversedArray, reversedBars, size, createBlacks(size));

// create random arrays

// http://stackoverflow.com/questions/962802#962890
const shuffle = (arr) => {
  const array = [...arr];
  let tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
};

const randomArray = shuffle(reversedArray);

// draw random arrays
randomBars = createBars("random-array", size);
drawBars(randomArray, randomBars, size, createBlacks(size));

// create nearly sorted arrays
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

// draw nearly sorted arrays
nearlySortedBars = createBars("nearly-sorted-array", size);
drawBars(nearlySortedArray, nearlySortedBars, size, createBlacks(size));



const insertionSort = (arr) => {
  const array = [...arr];
  let length = array.length;

  const steps = [];
  steps.push({
    array : [...array],
    colors : createBlacks(length)
  });

  for (let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;

    // progress
    const colors = createBlacks(length);
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

  let finalColors = createBlacks(length);
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



let nearlySortedSolution;
let nearlySortedItr;
let randomSolution;
let randomItr;
let reversedSolution;
let reversedItr;
let fewUniqueSolution;
let fewUniqueItr;

let drawTimeoutId;

function setup(){
  nearlySortedSolution = insertionSort(nearlySortedArray);
  nearlySortedItr = 0;

  randomSolution = insertionSort(randomArray);
  randomItr = 0;

  reversedSolution = insertionSort(reversedArray);
  reversedItr = 0;

  fewUniqueSolution = insertionSort(shuffle(fewUniqueArray));
  fewUniqueItr = 0;
}

function draw() {
  let run = false;

  const nearlySortedSteps = nearlySortedSolution.steps;
  if (nearlySortedItr < nearlySortedSteps.length){
    drawBars(
      nearlySortedSteps[nearlySortedItr].array,
      nearlySortedBars,
      size,
      nearlySortedSteps[nearlySortedItr].colors
    );

    nearlySortedItr++;
    run = true;
  }

  const randomSteps = randomSolution.steps;
  if (randomItr < randomSteps.length){
    drawBars(
      randomSteps[randomItr].array,
      randomBars,
      size,
      randomSteps[randomItr].colors
    );

    randomItr++;
    run = true;
  }

  const reversedSteps = reversedSolution.steps;
  if (reversedItr < reversedSteps.length){
    drawBars(
      reversedSteps[reversedItr].array,
      reversedBars,
      size,
      reversedSteps[reversedItr].colors
    );

    reversedItr++;
    run = true;
  }

  const fewUniqueSteps = fewUniqueSolution.steps;
  if (fewUniqueItr < fewUniqueSteps.length){
    drawBars(
      fewUniqueSteps[fewUniqueItr].array,
      fewUniqueBars,
      size,
      fewUniqueSteps[fewUniqueItr].colors
    );

    fewUniqueItr++;
    run = true;
  }

  if (run){
    drawTimeoutId = window.setTimeout(draw, 45); // 24 ms is a good value for 20 and 50 array
    console.log(drawTimeoutId);
  }
}

function runAlgorithm(){
  window.clearTimeout(drawTimeoutId);
  setup();
  draw();
}

document.getElementById("play-button").addEventListener("click", runAlgorithm);
document.getElementById("play-text").addEventListener("click", runAlgorithm);
