"use strict"

function bestsellerLessThanADollar(menu) {
  // Complete this function
}

// ------------------------------------------------------//
// Don't edit the code below here                        //
// ------------------------------------------------------//

const drinksMenu = [
  { name: "Carrot Juice", price: 2.0, unitsSold: 54 },
  { name: "Ice Tea", price: 0.75, unitsSold: 134 },
  { name: "Mocha", price: 1.25, unitsSold: 220 },
  { name: "Espresso", price: 1.0, unitsSold: 105 },
  { name: "Chamomile Tea", price: 0.8, unitsSold: 101 },
]

const breakfastMenu = [
  { name: "Omelette", price: 0.85, unitsSold: 245 },
  { name: "Pancakes", price: 4.0, unitsSold: 299 },
  { name: "Waffles", price: 3.5, unitsSold: 87 },
]

console.log(bestsellerLessThanADollar(drinksMenu))
console.log(bestsellerLessThanADollar(breakfastMenu))
