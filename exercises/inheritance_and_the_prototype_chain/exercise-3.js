'use strict'

const betterObjectPrototype = {
  toString () { return JSON.stringify(this) },

  equals (object) { return this.toString() === object.toString() },
}

function createBetterObject (firstName, lastName) {
  const newObject = Object.create(betterObjectPrototype)
  newObject.firstName = firstName
  newObject.lastName = lastName
  return newObject
}

const object1 = createBetterObject('Cod', 'Stewart')
const object2 = createBetterObject('Cod', 'Stewart')
const object3 = createBetterObject('Sealion', 'Dion')

console.log(object1.equals(object2)) // true
console.log(object1.equals(object3)) // false

// Uncomment these lines when you have added an introduction method to check it works
// console.log(object1.introduction()) // Hello my name is Cod Stewart
// console.log(object3.introduction()) // Hello my name is SeaLion Dion
