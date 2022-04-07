class Contact {
  constructor(email, phone) {
    this.email = email
    this.phone = phone
  }

  send(message) {
    console.log(`Sending (${this.preferredMethod}): ${message}`)

    if (this.preferredMethod === 'phone') {
      console.log(`  Messaging on: ${this.messagingPlatforms.join(', ')}`)
    }
  }

  addMessagingPlatform(platform) {
    if (!this.messagingPlatforms) {
      this.messagingPlatforms = []
    }

    this.messagingPlatforms.push(platform)
  }
}

const contact1 = new Contact('ada@skillerwhale.test', '0123456789')
const contact2 = new Contact('betty@skillerwhale.test', '0789456123')

contact1.send("What's for dinner?")
contact2.send("Can I send faxes with this?")
