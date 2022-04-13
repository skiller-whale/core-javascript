function Message (sender, recipients) {
  this.sender = sender
  this.recipients = recipients
}

function preview (sender) {
  console.log(`Message from ${sender.email} / ${sender.phone}`)
}

function Email (sender, recipients) {
  this.sender = sender
  this.recipients = recipients
}

function SMS (sender, recipients) {
  this.sender = sender
  this.recipients = recipients
}

function previewEmail (sender, recipients) {
  const emails = recipients.map(r => r.email).join(',')
  console.log(`Email from ${sender.email} to ${emails}`)
}

//
// You do not need to change this constructor function
//
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

//
// Call `preview` for both variables here.
//
