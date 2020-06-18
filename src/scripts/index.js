/*
    General Functions
*/
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

const size = 20;

const updateItemHeight = () => {
  const divfewUniqueArrayArea = document.getElementsByClassName("few-unique-array")[0];
  const height = divfewUniqueArrayArea.getBoundingClientRect().height;
  const root = document.documentElement;
  const itemHeight = Math.floor(0.5 * (height / size));
  root.style.setProperty("--item-height", `${itemHeight}px`);
}

updateItemHeight();


window.addEventListener('resize', () => {
  updateItemHeight();
});



const drawArray = (array, arrayClass) => {
  // const divfewUniqueArrayArea = document.getElementsByClassName("few-unique-array")[0];
  const divfewUniqueArrayArea = document.getElementsByClassName(arrayClass)[0];

  const min = Math.min(...array);
  const max = Math.max(...array);

  const arrayItems = []

  for (let i = 0; i < size; i++){
    const item = document.createElement("div");
    const width = map(array[i], min, max, 10, 90);

    item.className += "item"

    item.style.width = `${width}%`;
    item.style.order = i;

    divfewUniqueArrayArea.appendChild(item);
    arrayItems.push(item);
  }

  return arrayItems;
}


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
drawArray(fewUniqueArray, "few-unique-array");


// create reversed arrays
const reversedArray = [];

for (let i = size; i > 0; i--){
  reversedArray.push(i);
}

// draw in page
drawArray(reversedArray, "reversed-array");


console.log(reversedArray);
