// --------------------------------------------------
// business logic
// --------------------------------------------------
function sortMenu(menu) {
  // TODO: sort the menu so that the most expensive items come first,
  // and equal-priced items are sorted alphabetically by name

  // Note: to compare to strings alphabetically, you can use the `localeCompare` method:
  // "apple".localeCompare("banana") // returns -1 (apple comes before banana)
}

// ---------------------------------------------------
// execution
// ---------------------------------------------------
const drinksMenu = [
  { name: "Iced Tea", price: 2, vegan: true },
  { name: "Latte", price: 1.5, vegan: false },
  { name: "Cappuccino", price: 1.75, vegan: false },
  { name: "Lemon Ice Tea", price: 2, vegan: true },
  { name: "Mocha", price: 2.5, vegan: false },
  { name: "Chamomile Tea", price: 0.75, vegan: true },
  { name: "Green Tea", price: 0.5, vegan: true },
];

sortMenu(drinksMenu);
console.log(drinksMenu);
