"use strict"

const item = {
  label: "crab sticks",
  price: 4.99,
}

function getPrice(item) {
  return `£${item.price.toFixed(2)}`
}

function setPrice(item, value) {
  const num = parseFloat(value)
  if (!isFinite(num)) {
    console.warn("price must be a number")
    return
  }
  item.price = value
}

setPrice(item, 3.5)
console.log(getPrice(item))
