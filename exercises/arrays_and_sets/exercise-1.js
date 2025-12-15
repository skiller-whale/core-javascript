// --------------------------------------------------
// business logic
// --------------------------------------------------
function discountVeganItems(menu) {
  // TODO: loop through the menu and apply a 50% discount to vegan items
}

function displayMenu(menu) {
  // TODO: loop through the menu and log each item in the specified format
}

// ---------------------------------------------------
// execution
// ---------------------------------------------------
const menu = [
  { name: "Ice Tea", price: 3, vegan: true },
  { name: "Carrot Juice", price: 2, vegan: true },
  { name: "Pancakes", price: 4, vegan: false },
  { name: "Penne Alfredo", price: 9, vegan: false },
  { name: "Waffles", price: 4, vegan: false },
];

discountVeganItems(menu);
displayMenu(menu);
