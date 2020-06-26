let SIZE = 20;

const speeds = {
  slow: 150,
  medium: 45,
  fast: 15
};

let currentSpeed = speeds.medium;
let arrays;
let graphs;
let solutions;
let iterations;
let drawTimeoutId;


function initialize (size){
  arrays = [];
  graphs = [];

  arrays.push(makeNearlySortedArray(size));
  arrays.push(makeRandomArray(size));
  arrays.push(makeReversedArray(size));
  arrays.push(shuffle(makeFewUniqueArray(size)));

  updateBarHeight(size);

  graphs.push(initializeBars(arrays[0], "nearly-sorted-array-canvas"));
  graphs.push(initializeBars(arrays[1], "random-array-canvas"));
  graphs.push(initializeBars(arrays[2], "reversed-array-canvas"));
  graphs.push(initializeBars(arrays[3], "few-unique-array-canvas"));
}

initialize(SIZE);

const next = (iteration, solution, bars) => {
  const steps = solution.steps;
  if (iterations >= steps.length) return false;

  const min = Math.min(...solution.array);
  const max = Math.max(...solution.array);

  drawBars(
    steps[iteration].array,
    bars,
    steps[iteration].colors,
    min,
    max
  );
  return true;
};

function setup(){
  solutions = sort(arrays, getDefaultBarColorArray);
  iterations = 0;
}

function draw() {
  let runNextIteration = false;

  for (let i = 0; i < solutions.length; i++){
    runNextIteration |= next(iterations, solutions[i], graphs[i]);
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
