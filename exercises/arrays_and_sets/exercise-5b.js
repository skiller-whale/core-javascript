// --------------------------------------------------
// business logic
// --------------------------------------------------
function findMaxItems(menu, amount) {
  // TODO: use the reduce method to find the maximum number of items that can
  // be bought with the given amount (assuming you can only buy 1 of each item)
}

function sortedMenu(menu) {
  return menu.toSorted((a, b) => a.price - b.price);
}

// ---------------------------------------------------
// execution
// ---------------------------------------------------
const menu = [
  { name: "Carrot Juice", price: 2, unitsSold: 54 },
  { name: "Ice Tea", price: 1, unitsSold: 134 },
  { name: "Mocha", price: 2, unitsSold: 220 },
  { name: "Espresso", price: 3, unitsSold: 105 },
  { name: "Chamomile Tea", price: 2, unitsSold: 101 },
  { name: "Omelette", price: 1, unitsSold: 245 },
  { name: "Pancakes", price: 5, unitsSold: 299 },
  { name: "Waffles", price: 4, unitsSold: 87 },
];

const amount = 10;

console.log(findMaxItems(sortMenu(menu), amount));
