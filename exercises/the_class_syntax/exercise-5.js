"use strict"

// Use this utility function within the `domainMatch` method of `Contact`.
// Do not change it or make it a method of `Contact`.
function domainFrom(email) {
  return email.substring(email.indexOf("@") + 1)
}

class Contact {
  name
  email
  phone

  constructor(name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }
}

function domainMatch(contact1, contact2) {
  return domainFrom(contact1.email) === domainFrom(contact2.email)
}

const contact1 = new Contact("Ada", "ada@skillerwhale.test", "0123456789")
const contact2 = new Contact("Betty", "betty@plaicebook.test", "9876543210")
const contact3 = new Contact("Chloe", "chloe@plaicebook.test", "0011223344")

console.log(
  `${contact1.name}'s email is from the same domain as ${
    contact2.name
  }'s email? ${domainMatch(contact1, contact2)}`
)
console.log(
  `${contact2.name}'s email is from the same domain as ${
    contact3.name
  }'s email? ${domainMatch(contact2, contact3)}`
)
