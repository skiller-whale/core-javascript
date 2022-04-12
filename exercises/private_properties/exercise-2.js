// Use this utility function within the `domainMatch` method of `Contact`.
// Do not change it or make it a method of `Contact`.
function domainFrom(email) {
  return email.substring(email.indexOf('@') + 1)
}

class Contact {
  email

  constructor(email) {
    this.email = email
  }

  get email() {
    return this.email
  }
}

function domainMatch(contact1, contact2) {
  return domainFrom(contact1.email) === domainFrom(contact2.email)
}

const contact1 = new Contact('ada@skillerwhale.test')
const contact2 = new Contact('betty@plaicebook.test')
const contact3 = new Contact('chloe@plaicebook.test')

console.log(`${contact1.email} same domain as ${contact2.email}?\n${domainMatch(contact1, contact2)}\n`)
console.log(`${contact2.email} same domain as ${contact3.email}?\n${domainMatch(contact2, contact3)}`)
