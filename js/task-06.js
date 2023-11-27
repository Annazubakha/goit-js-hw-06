const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const valueLength = Number(input.value.length);
  const inputLength = Number(input.dataset.length);
  if (valueLength === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }

  console.log(event);
}
