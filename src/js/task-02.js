const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredientsRef = document.querySelector('#ingredients');
const arrayIngredientsForAppend = [];

ingredients.forEach(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item');
  arrayIngredientsForAppend.push(ingredientRef);
console.log(ingredientRef);
});

ulIngredientsRef.append(...arrayIngredientsForAppend);