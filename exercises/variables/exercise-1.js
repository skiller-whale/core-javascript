let person = { firstName: undefined, lastName: undefined, age: undefined, location: undefined }

function addNames (firstName, lastName) {
  person = { firstName, lastName }
}

addNames('Ernest', 'Herringway')
console.log(person)
