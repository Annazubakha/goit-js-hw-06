function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
let size = 20;

createBtn.addEventListener("click", oncreateBtnClick);
destroyBtn.addEventListener("click", ondestroyBtnBtnClick);

function oncreateBtnClick() {
  console.log(input.value);
  for (let i = 0; i < input.value; i++) {
    size += 10;
    const item = `<div style="width: ${size}px; height: ${size}px;
    background-color: ${getRandomHexColor()}; margin:2px"></div>`;
    boxes.insertAdjacentHTML("beforeend", item);
  }
  input.value = "";
}

function ondestroyBtnBtnClick() {
  boxes.innerHTML = "";
  size = 20;
}
