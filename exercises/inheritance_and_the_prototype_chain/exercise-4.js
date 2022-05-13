"use strict"

function BetterObject(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

BetterObject.prototype.toString = function () {
  return JSON.stringify(this)
}

// Write your code here

BetterObject.prototype.introduction = function () {
  return `Hello my name is ${this.firstName} ${this.lastName}`
}

const object1 = new BetterObject("Cod", "Stewart")
const object2 = new BetterObject("Cod", "Stewart")
const object3 = new BetterObject("Sealion", "Dion", "Singing")

console.log(object1.introduction())
console.log(object3.introduction())

// Uncomment this code when you are ready to test your equals method
// console.log(BetterObject.equals(object1, object2)) // true
// console.log(BetterObject.equals(object1, object3)) // false
