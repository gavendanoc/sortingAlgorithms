const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

// create few_unique_array
const size = 50;
const uniqueValues = 4;
const fewUniqueArray = [];
let initialValue = 0;

for (let i = 0; i < size; i++){
  if (i % Math.floor(size / uniqueValues) == 0 ) {
    initialValue++;
  }
  fewUniqueArray.push(initialValue);
}


console.log(fewUniqueArray);


// draw in page
const divfewUniqueArrayArea = document.getElementsByClassName("few-unique-array")[0];

const min = Math.min(...fewUniqueArray);
const max = Math.max(...fewUniqueArray);

const updateItemHeight = () => {
  const height = divfewUniqueArrayArea.getBoundingClientRect().height;
  const root = document.documentElement;
  const itemHeight = Math.floor(0.5 * (height / size));
  root.style.setProperty("--item-height", `${itemHeight}px`);
}

updateItemHeight();

for (let i = 0; i < size; i++){
  const item = document.createElement("div");
  const width = map(fewUniqueArray[i], min, max, 10, 90);

  item.className += "item"

  item.style.width = `${width}%`;
  item.style.order = i;

  divfewUniqueArrayArea.appendChild(item);
}


window.addEventListener('resize', () => {
  updateItemHeight();
});
