"use strict"

function insertInputsToBoilerplate (inputs) {
  console.log(`
  <form action="/profile.js">\n
    ${inputs.join('\n\n    ')}\n
    <input type="submit">\n
  </form>
  `)
}

function createInputsFromObject (fields) {
  // write your code here

}

const fieldsAndPlaceholders = {
  firstName: 'Enter your first name',
  surname: 'Enter your surname',
  email: 'Enter your email address',
  phoneNumber: '+44           '
}

const inputs = createInputsFromObject(fieldsAndPlaceholders)
insertInputsToBoilerplate(inputs)