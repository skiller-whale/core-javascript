"use strict"

class Contact {
  name
  email
  phone

  constructor(name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }

  toString() {
    return this.name
  }
}

class Message {
  static DEFAULT_SENDER = new Contact("The Orcaniser", "orcaniser@skillerwhale.test", "01122334455")

  sender
  recipients

  constructor(sender, recipients) {
    this.sender = sender
    this.recipients = recipients
  }

  toString() {
    return `message from ${this.sender} to ${this.recipients.join(", ")}`
  }

  send() {
    console.log(`sending ${this}...done!`)
  }
}

// Email

// SMS

const contacts = [
  new Contact("Ada", "ada@skillerwhale.test", "04564564564"),
  new Contact("Betty", "betty@skillerwhale.test", "09879879879"),
  new Contact("Celine", "celine@skillerwhale.test", "03213213213"),
]

const email = new Email(Message.DEFAULT_SENDER, contacts)
const sms = new SMS(contacts[1], contacts)

email.send()
sms.send()
