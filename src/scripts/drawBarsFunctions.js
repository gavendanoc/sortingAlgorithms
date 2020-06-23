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

const removeBars = (arrayClass) => {
  const divArray = document.getElementsByClassName(arrayClass)[0];
  divArray.innerHTML = '';
};

const removeAllBars = () => {
  removeBars("nearly-sorted-array-canvas");
  removeBars("random-array-canvas");
  removeBars("reversed-array-canvas");
  removeBars("few-unique-array-canvas");
};

const getDefaultBarColorArray = (size) => {
  blacks = [];
  for (let i = 0; i < size ; i++){
    blacks.push('#888888');
  }
  return blacks;
};


const drawBars = (array, bars, color) => {
  const min = Math.min(...array);
  const max = Math.max(...array);

  for (let i = 0; i < array.length; i++){
    const width = map(array[i], min, max, 10, 90);

    bars[i].style.width = `${width}%`;
    bars[i].style.backgroundColor = color[i];
  }
};


const initializeBars = (array, arrayClass) => {
  bars = createBars(arrayClass, array.length);
  drawBars(array, bars, getDefaultBarColorArray(array.length));
  return bars;
}

const updateBarHeight = (size) => {
  /* Not readable, fix later*/
  const divfewUniqueArrayArea = document.getElementsByClassName("bars")[0];
  const height = divfewUniqueArrayArea.getBoundingClientRect().height;
  const root = document.documentElement;
  const barHeight = Math.floor(0.5 * (height / size));
  root.style.setProperty("--item-height", `${barHeight}px`);
};
