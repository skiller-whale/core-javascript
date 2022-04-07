function Contact(email, phone) {
  this.email = email
  this.phone = phone
}

Contact.prototype.format = function () {
  return `Email: ${this.email}, Phone: ${this.phone}`
}
