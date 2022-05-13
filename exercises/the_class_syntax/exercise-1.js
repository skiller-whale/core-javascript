"use strict"

function Contact(name, email, phone) {
  this.name = name
  this.email = email
  this.phone = phone
}

Contact.prototype.toString = function () {
  return this.name
}

function Message(sender, recipients) {
  this.sender = sender
  this.recipients = recipients
}

Message.DEFAULT_SENDER = new Contact(
  "The Orcaniser",
  "orcaniser@skillerwhale.test",
  "01122334455"
)

Message.prototype.toString = function () {
  return `message from ${this.sender} to ${this.recipients.join(", ")}`
}

Message.prototype.send = function () {
  console.log(`sending ${this}...done!`)
}

const contacts = [
  new Contact("Ada", "ada@skillerwhale.test", "04564564564"),
  new Contact("Betty", "betty@skillerwhale.test", "09879879879"),
  new Contact("Celine", "celine@skillerwhale.test", "03213213213"),
]

const message1 = new Message(Message.DEFAULT_SENDER, contacts)
const message2 = new Message(contacts[1], contacts)

message1.send()
message2.send()
