'use strict'

const theObjectPrototype = Object.getPrototypeOf({})

// Write your code here


const object1 = { firstName: 'Cod', lastName: 'Stewart' }
const object2 = { firstName: 'Cod', lastName: 'Stewart' }
const object3 = { firstName: 'Sealion', lastName: 'Dion' }

console.log(object1.equals(object2)) // true
console.log(object1.equals(object3)) // false
