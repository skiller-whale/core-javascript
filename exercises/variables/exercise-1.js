'use strict'

let person = { firstName: undefined, lastName: undefined, age: 61, location: 'Idaho' }

function addNames (firstName, lastName) {
  person = { firstName, lastName }
}

addNames('Ernest', 'Herringway')
console.log(person)
