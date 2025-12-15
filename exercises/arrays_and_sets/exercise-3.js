// --------------------------------------------------
// business logic
// --------------------------------------------------
function glutenFreeOptionsAvailable(menu) {
  // TODO: return true if any item in the menu is gluten free
}

function isMenuVegan(menu) {
  // TODO: return true if all items in the menu are vegan
}

// ---------------------------------------------------
// execution
// ---------------------------------------------------
const menu = [
  { name: "Ice Tea", price: 3, vegan: true, glutenFree: true },
  { name: "Carrot Juice", price: 2, vegan: true, glutenFree: true },
  { name: "Pancakes", price: 4, vegan: false, glutenFree: false },
  { name: "Penne Alfredo", price: 9, vegan: false, glutenFree: false },
  { name: "Waffles", price: 4, vegan: false, glutenFree: false },
];

if (glutenFreeOptionsAvailable(menu)) {
  console.log("Gluten free options are available.");
} else {
  console.log("Gluten free options are not available.");
}

if (isMenuVegan(menu)) {
  console.log("All items in the menu are vegan.");
} else {
  console.log("Menu contains non-vegan items.");
}
