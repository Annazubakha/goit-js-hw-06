function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick(evt) {
  backgroundColor.textContent = document.body.style.backgroundColor =
    getRandomHexColor();
}
