let person = { firstName: undefined, lastName: undefined, age: undefined, location: undefined }

function addNames (person, firstName, lastName) {
  person = { firstName, lastName }
}

addNames(person, 'Ernest', 'Herringway')
console.log(person)
