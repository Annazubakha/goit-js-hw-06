let counterValue = 0;
const findCounter = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onIncrementBtnClick(event) {
  counterValue += 1;
  findCounter.textContent = counterValue;
}
function onDecrementBtnClick(event) {
  counterValue -= 1;
  findCounter.textContent = counterValue;
}
