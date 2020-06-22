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


const getDefaultBarColorArray = (size) => {
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


const initializeBars = (array, arrayClass) => {
  bars = createBars(arrayClass, array.length);
  drawBars(array, bars, array.length, getDefaultBarColorArray(array.length));
  return bars;
}
