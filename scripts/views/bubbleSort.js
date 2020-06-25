let SIZE = 20;

const speeds = {
  slow: 150,
  medium: 45,
  fast: 15
};

let currentSpeed = speeds.medium;

let nearlySortedArray;
let randomArray;
let reversedArray;
let fewUniqueArray;
let nearlySortedBars;
let randomBars;
let reversedBars;
let fewUniqueBars;

function initialize (size){
  nearlySortedArray = makeNearlySortedArray(size);
  randomArray = makeRandomArray(size);
  reversedArray = makeReversedArray(size);
  fewUniqueArray = makeFewUniqueArray(size);

  updateBarHeight(size);
  nearlySortedBars = initializeBars(nearlySortedArray, "nearly-sorted-array-canvas");
  randomBars = initializeBars(randomArray, "random-array-canvas");
  reversedBars = initializeBars(reversedArray, "reversed-array-canvas");
  fewUniqueBars = initializeBars(fewUniqueArray, "few-unique-array-canvas");
}

initialize(SIZE);

let nearlySortedSolution;
let randomSolution;
let reversedSolution;
let fewUniqueSolution;
let iterations;

let drawTimeoutId;

function setup(){
  nearlySortedSolution = bubbleSort(nearlySortedArray, getDefaultBarColorArray);
  randomSolution = bubbleSort(randomArray, getDefaultBarColorArray);
  reversedSolution = bubbleSort(reversedArray, getDefaultBarColorArray);
  fewUniqueSolution = bubbleSort(shuffle(fewUniqueArray), getDefaultBarColorArray);
  iterations = 0;
}

function draw() {
  let runNextIteration = false;

  const nearlySortedSteps = nearlySortedSolution.steps;
  if (iterations < nearlySortedSteps.length){
    drawBars(
      nearlySortedSteps[iterations].array,
      nearlySortedBars,
      nearlySortedSteps[iterations].colors
    );

    runNextIteration = true;
  }

  const randomSteps = randomSolution.steps;
  if (iterations < randomSteps.length){
    drawBars(
      randomSteps[iterations].array,
      randomBars,
      randomSteps[iterations].colors
    );

    runNextIteration = true;
  }

  const reversedSteps = reversedSolution.steps;
  if (iterations < reversedSteps.length){
    drawBars(
      reversedSteps[iterations].array,
      reversedBars,
      reversedSteps[iterations].colors
    );

    runNextIteration = true;
  }

  const fewUniqueSteps = fewUniqueSolution.steps;
  if (iterations < fewUniqueSteps.length){
    drawBars(
      fewUniqueSteps[iterations].array,
      fewUniqueBars,
      fewUniqueSteps[iterations].colors
    );

    runNextIteration = true;
  }

  iterations++;

  if (runNextIteration){
    drawTimeoutId = window.setTimeout(draw, currentSpeed); // 24 ms is a good value for 20 and 50 array
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
  updateBarHeight(SIZE);
});


document.getElementById("size-button-20").addEventListener("click", function () {
  window.clearTimeout(drawTimeoutId);
  SIZE = 20;
  removeAllBars();
  initialize(SIZE);

  document.getElementById("size-button-30").classList.remove("selected-size-button");
  document.getElementById("size-button-40").classList.remove("selected-size-button");
  document.getElementById("size-button-50").classList.remove("selected-size-button");
  this.classList.add("selected-size-button");
});

document.getElementById("size-button-30").addEventListener("click", function () {
  window.clearTimeout(drawTimeoutId);
  SIZE = 30;
  removeAllBars();
  initialize(SIZE);

  document.getElementById("size-button-20").classList.remove("selected-size-button");
  document.getElementById("size-button-40").classList.remove("selected-size-button");
  document.getElementById("size-button-50").classList.remove("selected-size-button");
  this.classList.add("selected-size-button");
});

document.getElementById("size-button-40").addEventListener("click", function () {
  window.clearTimeout(drawTimeoutId);
  SIZE = 40;
  removeAllBars();
  initialize(SIZE);

  document.getElementById("size-button-20").classList.remove("selected-size-button");
  document.getElementById("size-button-30").classList.remove("selected-size-button");
  document.getElementById("size-button-50").classList.remove("selected-size-button");
  this.classList.add("selected-size-button");
});

document.getElementById("size-button-50").addEventListener("click", function () {
  window.clearTimeout(drawTimeoutId);
  SIZE = 50;
  removeAllBars();
  initialize(SIZE);

  document.getElementById("size-button-20").classList.remove("selected-size-button");
  document.getElementById("size-button-30").classList.remove("selected-size-button");
  document.getElementById("size-button-40").classList.remove("selected-size-button");
  this.classList.add("selected-size-button");
});


document.getElementById("speed-button-slow").addEventListener("click", function () {
  currentSpeed = speeds.slow;

  this.classList.add("selected-speed-button");
  document.getElementById("speed-button-medium").classList.remove("selected-speed-button");
  document.getElementById("speed-button-fast").classList.remove("selected-speed-button");
});

document.getElementById("speed-button-medium").addEventListener("click", function () {
  currentSpeed = speeds.medium;

  this.classList.add("selected-speed-button");
  document.getElementById("speed-button-slow").classList.remove("selected-speed-button");
  document.getElementById("speed-button-fast").classList.remove("selected-speed-button");

});

document.getElementById("speed-button-fast").addEventListener("click", function () {
  currentSpeed = speeds.fast;

  this.classList.add("selected-speed-button");
  document.getElementById("speed-button-slow").classList.remove("selected-speed-button");
  document.getElementById("speed-button-medium").classList.remove("selected-speed-button");
});
