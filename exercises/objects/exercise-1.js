"use strict"

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
  object[key]
    ? console.log(key, 'already exists')
    : object[key] = value
}

function removeProperty (object, key) {
  object[key]
    ? delete object[key]
    : console.log(key, 'does not exist')
}

const person = buildPerson('Swim', 'Shady', 'Arms Spaghetti')
person.catchPhrase()

addProperty(person, 'age', 21)
removeProperty(person, 'catchPhrase')
console.log(person)
