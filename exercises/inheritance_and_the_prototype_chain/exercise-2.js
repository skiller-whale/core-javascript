function Message (sender, recipients) {
  this.sender = sender
  this.recipients = recipients
}

Message.prototype.preview = function () {
  console.log(`Message from ${this.sender.email} / ${this.sender.phone}`)
}

function Email (sender, recipients) {
  this.sender = sender
  this.recipients = recipients
}

Object.setPrototypeOf(Email, Message)
Object.setPrototypeOf(Email.prototype, Message.prototype)

Email.prototype.preview = function () {
  const emails = this.recipients.map(r => r.email).join(',')
  console.log(`Email from ${this.sender.email} to ${emails}`)
}

function SMS (sender, recipients) {
  this.sender = sender
  this.recipients = recipients
}

Object.setPrototypeOf(SMS, Message)
Object.setPrototypeOf(SMS.prototype, Message.prototype)

function Contact(email, phone) {
  this.email = email
  this.phone = phone
}

const from = new Contact('orcaniser@skillerwhale.test', '01122334455')

const to = [
  new Contact('ada@skillerwhale.test', '04564564564'),
  new Contact('betty@skillerwhale.test', '09879879879'),
  new Contact('celine@skillerwhale.test', '03213213213'),
]

const email = new Email(from, to)
const sms = new SMS(from, to)

email.preview()
sms.preview()
