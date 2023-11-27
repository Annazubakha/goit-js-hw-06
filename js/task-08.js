const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields should be filled!");
  }
  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
}
