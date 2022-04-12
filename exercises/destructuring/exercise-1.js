'use strict'

const person = {
  forenames: ['Ernest', 'Miller'],
  surname: 'Herringway',
  age: 61,
  physicalAttributes: {
    eyeColour: 'brown',
    hairColour: 'grey',
    beard: true,
  }
}

function printSurnameAndAge (person) {
  console.log('Mr', person.surname, 'died age', person.age)
}

function printFirstNameAndBeardStatus (person) {
  if (person.physicalAttributes.beard === true) {
    console.log(person.forenames[0], 'had a beard')
  } else {
    console.log(firstName, 'did not have a beard')
  }
}

function printFullNameAndEyeColourAndHairColour (person) {
  console.log(person.forenames[0], person.forenames[1], person.surname, 'had', person.physicalAttributes.eyeColour, 'eyes and', person.physicalAttributes.hairColour, 'hair')
}

printSurnameAndAge(person)
printFirstNameAndBeardStatus(person)
printFullNameAndEyeColourAndHairColour(person)
