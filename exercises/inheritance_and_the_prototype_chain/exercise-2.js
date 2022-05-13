"use strict"

const theObjectPrototype = Object.getPrototypeOf({})

theObjectPrototype.equals = function (object) {
  return this.toString() === object.toString()
}

theObjectPrototype.toString = function () {
  return JSON.stringify(this)
}

const object1 = { firstName: "Cod", lastName: "Stewart" }
const object2 = { firstName: "Cod", lastName: "Stewart" }
const object3 = { firstName: "Sealion", lastName: "Dion" }

console.log(object1.equals(object2)) // true
console.log(object1.equals(object3)) // false
