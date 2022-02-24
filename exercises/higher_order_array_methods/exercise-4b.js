function findMaxItems(menu, amount) {
  // Complete this function

}

// ------------------------------------------------------//
// Don't edit the code below here                        //
// ------------------------------------------------------//

function sortMenu(menu) {
  menu
    .sort((a, b) => b.price - a.price)
}

const menu = [
  {name: 'Carrot Juice', price: 2, unitsSold: 54},
  {name: 'Ice Tea', price: 1, unitsSold: 134},
  {name: 'Mocha', price: 2, unitsSold: 220},
  {name: 'Espresso', price: 3, unitsSold: 105},
  {name: 'Chamomile Tea', price:2, unitsSold: 101},
  {name: 'Omelette', price: 1, unitsSold: 245},
  {name: 'Pancakes', price: 5, unitsSold: 299},
  {name: 'Waffles', price: 4, unitsSold: 87},
]

const amount = 10

console.log(findMaxItems(sortMenu(menu), amount))
