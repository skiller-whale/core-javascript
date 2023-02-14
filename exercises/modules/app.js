// helper functions
function inviteReady(time) {
  return time <= sevenDaysInFuture() && today() !== daysOfTheWeek.SATURDAY && today() !== daysOfTheWeek.SUNDAY
}

function reminderReady(time) {
  return time <= threeDaysInFuture() && today() !== daysOfTheWeek.SATURDAY && today() !== daysOfTheWeek.SUNDAY
}

// date utilities
function now() {
  return new Date()
}

function today() {
  return now().getDay()
}

function sevenDaysInFuture() {
  return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
}

function threeDaysInFuture() {
  return new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
}

const daysOfTheWeek = {
  MONDAY: 0,
  TUESDAY: 1,
  WEDNESDAY: 2,
  THURSDAY: 3,
  FRIDAY: 4,
  SATURDAY: 5,
  SUNDAY: 6,
}

// email templates
const INVITE_LEARNER_EMAIL = "Hi Learner, you are invited to the following session:"
const INVITE_COACH_EMAIL = "Hi Coach, you are teaching the following session:"
const REMIND_LEARNER_EMAIL = "Hi Learner, here is your reminder for the upcoming session:"
const REMIND_COACH_EMAIL = "Hi Coach, here is your reminder for the upcoming session:"

// coach
class Coach {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail(content, module, time) {
    console.log(content, module, time)
  }
}

// learner
class Learner {
  assessmentComplete = false
  modulesCompleted = {}

  constructor(name, email) {
    this.name = name
    this.email = email
  }

  completeAssessment() {
    this.assessmentComplete = true
  }

  sendEmail(content, module, time) {
    console.log(content, module, time)
  }

  rateSession(rating, module) {
    this.modulesCompleted[module] = rating
  }
}

// session
class Session {
  inviteSent = false
  reminderSent = false

  constructor(module, time, learners, coach) {
    this.module = module
    this.time = time
    this.learners = learners
    this.coach = coach
  }

  sendInvite() {
    if (!this.inviteSent && inviteReady(this.time)) {
      this.learners.forEach((learner) => {
        learner.sendEmail(INVITE_LEARNER_EMAIL, this.module, this.time)
      })
      this.coach.sendEmail(INVITE_COACH_EMAIL, this.module, this.time)
    }
    this.inviteSent = true
  }

  sendReminder() {
    if (this.inviteSent && !this.reminderSent && reminderReady(this.time)) {
      this.learners.forEach((learner) => {
        learner.sendEmail(REMIND_LEARNER_EMAIL, this.module, this.time)
      })
      this.coach.sendEmail(REMIND_COACH_EMAIL, this.module, this.time)
    }
    this.reminderSent = true
  }

  getAverageRating() {
    const total = this.learners.reduce((total, current) => total + current.modulesCompleted[this.module], 0)
    return total / this.learners.length
  }
}

const learner = new Learner("Cod Stewart", "cod@stewart.com")
const coach = new Coach("Swim Shady", "swim@shady.com")
const session = new Session("arrays", new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), [learner], coach)

session.sendInvite()
