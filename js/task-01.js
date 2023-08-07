
const parentUl = document.getElementById("categories");
const categories = parentUl.getElementsByTagName("ul");
const liCountPerUl = {};

Array.from(categories).forEach((categoryUl) => {
  const category = categoryUl.previousElementSibling.textContent.trim();
  const elementsCount = categoryUl.getElementsByTagName("li").length;
  
  liCountPerUl[category] = elementsCount;
});

