const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const createMarkup = ingredients.map((el) => {
  const liElement = document.createElement("li");
  liElement.textContent = el;
  liElement.classList.add("item");
  return liElement;
});
ingredientsEl.append(...createMarkup);
