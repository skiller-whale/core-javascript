'use strict'

function buildPerson (firstName, lastName, catchPhrase) {
  return {
    firstName: firstName,
    lastName: lastName,

    catchPhrase: function () {
      console.log(catchPhrase)
    }
  }
}

function addProperty (object, key, value) {
  if (object[key]) return
  object[key] = value
}

function removeProperty (object, key) {
  if (!object[key]) return
  delete object[key]
}

const person = buildPerson('Swim', 'Shady', 'Arms Spaghetti')
person.catchPhrase()

addProperty(person, 'age', 21)
removeProperty(person, 'catchPhrase')
console.log(person)
