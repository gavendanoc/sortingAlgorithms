const size = 40;

const updateBarHeight = (size) => {
  /* Not readable, fix later*/
  const divfewUniqueArrayArea = document.getElementsByClassName("few-unique-array")[0];
  const height = divfewUniqueArrayArea.getBoundingClientRect().height;
  const root = document.documentElement;
  const barHeight = Math.floor(0.5 * (height / size));
  root.style.setProperty("--item-height", `${barHeight}px`);
};

updateBarHeight(size);


window.addEventListener('resize', () => {
  updateBarHeight(size);
});


const nearlySortedArray = makeNearlySortedArray(size);
const randomArray = makeRandomArray(size);
const reversedArray = makeReversedArray(size);
const fewUniqueArray = makeFewUniqueArray(size);

const nearlySortedBars = initializeBars(nearlySortedArray, "nearly-sorted-array");
const randomBars = initializeBars(randomArray, "random-array");
const reversedBars = initializeBars(reversedArray, "reversed-array");
const fewUniqueBars = initializeBars(fewUniqueArray, "few-unique-array");


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
  nearlySortedSolution = insertionSort(nearlySortedArray, getDefaultBarColorArray);
  nearlySortedItr = 0;

  randomSolution = insertionSort(randomArray, getDefaultBarColorArray);
  randomItr = 0;

  reversedSolution = insertionSort(reversedArray, getDefaultBarColorArray);
  reversedItr = 0;

  fewUniqueSolution = insertionSort(shuffle(fewUniqueArray), getDefaultBarColorArray);
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
