const inputName = document.querySelector("#name-input");
const outputtName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   if ((outputtName.textContent = event.currentTarget.value) !== "") {
//     outputtName.textContent === event.currentTarget.value;
//   } else outputtName.textContent = "Anonymous";
/// }

function onInputChange(event) {
  outputtName.textContent =
    event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous";
}
