const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredients = document.getElementById("ingredients");


const ulEl = document.createElement("ul");

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  ulEl.appendChild(liEl);
}

document.body.appendChild(ulEl);

