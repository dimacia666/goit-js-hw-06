const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById("ingredients");
const liEl = [];

for (const ingredient of ingredients) {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liEl.push(liItem);
}

ulEl.append(...liEl);

