class Contact {
  send(message) {
    console.log(`Sending: ${message} (messages sent: ${this.messageCount})`)
  }
}

const contact = new Contact()

contact.send("Message 1")
contact.send("Message 2")
contact.send("Message 3")
contact.send("Message 4")
contact.send("Message 5")
