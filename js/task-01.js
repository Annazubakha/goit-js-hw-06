const caterogiesItemsEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${caterogiesItemsEl.length}`);

caterogiesItemsEl.forEach((el) => {
  console.log(
    `Categories: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`
  );
});
