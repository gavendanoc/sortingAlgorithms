const size = 40;


const nearlySortedArray = makeNearlySortedArray(size);
const randomArray = makeRandomArray(size);
const reversedArray = makeReversedArray(size);
const fewUniqueArray = makeFewUniqueArray(size);

updateBarHeight(size);
const nearlySortedBars = initializeBars(nearlySortedArray, "nearly-sorted-array");
const randomBars = initializeBars(randomArray, "random-array");
const reversedBars = initializeBars(reversedArray, "reversed-array");
const fewUniqueBars = initializeBars(fewUniqueArray, "few-unique-array");


let nearlySortedSolution;
let randomSolution;
let reversedSolution;
let fewUniqueSolution;
let iterations;


let drawTimeoutId;

function setup(){
  nearlySortedSolution = insertionSort(nearlySortedArray, getDefaultBarColorArray);
  randomSolution = insertionSort(randomArray, getDefaultBarColorArray);
  reversedSolution = insertionSort(reversedArray, getDefaultBarColorArray);
  fewUniqueSolution = insertionSort(shuffle(fewUniqueArray), getDefaultBarColorArray);
  iterations = 0;
}

function draw() {
  let runNextIteration = false;

  const nearlySortedSteps = nearlySortedSolution.steps;
  if (iterations < nearlySortedSteps.length){
    drawBars(
      nearlySortedSteps[iterations].array,
      nearlySortedBars,
      size,
      nearlySortedSteps[iterations].colors
    );

    runNextIteration = true;
  }

  const randomSteps = randomSolution.steps;
  if (iterations < randomSteps.length){
    drawBars(
      randomSteps[iterations].array,
      randomBars,
      size,
      randomSteps[iterations].colors
    );

    runNextIteration = true;
  }

  const reversedSteps = reversedSolution.steps;
  if (iterations < reversedSteps.length){
    drawBars(
      reversedSteps[iterations].array,
      reversedBars,
      size,
      reversedSteps[iterations].colors
    );

    runNextIteration = true;
  }

  const fewUniqueSteps = fewUniqueSolution.steps;
  if (iterations < fewUniqueSteps.length){
    drawBars(
      fewUniqueSteps[iterations].array,
      fewUniqueBars,
      size,
      fewUniqueSteps[iterations].colors
    );

    runNextIteration = true;
  }

  iterations++;

  if (runNextIteration){
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


window.addEventListener('resize', () => {
  updateBarHeight(size);
});
