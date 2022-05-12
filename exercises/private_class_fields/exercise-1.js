'use strict'

class Contact {
  email
  phone
  previousEmails = []

  constructor(email, phone) {
    this.email = email
    this.phone = phone
  }

  undoEmailChange() {
    this.email = this.previousEmails.pop()
  }
}

const initial = 'ada@skillerwhale.test'

const contact = new Contact(initial, '0123456789')

contact.email = 'edited@skillerwhale.test'

// Uncomment the following code once you have completed the getters and setters

/**
console.log(contact.email)
contact.email = 'betty@skillerwhale.test'
console.log(contact.email)
contact.email = 'chloe@skillerwhale.test'
console.log(contact.email)

contact.undoEmailChange()
contact.undoEmailChange()
*/

console.log(`Updated contact: ${contact.email}, ${contact.phone}`)
