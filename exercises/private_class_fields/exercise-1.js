"use strict"

class Contact {
  name
  email
  phone
  previousEmails = []

  constructor(name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }

  undoEmailChange() {
    this.email = this.previousEmails.pop()
  }
}

const contact = new Contact("Ada", "ada@skillerwhale.test", "0123456789")

console.log(contact.email)
contact.email = "betty@skillerwhale.test"
console.log(contact.email)
contact.email = "chloe@skillerwhale.test"
console.log(contact.email)

contact.undoEmailChange()
contact.undoEmailChange()

console.log(`Updated contact: ${contact.email}, ${contact.phone}`)
