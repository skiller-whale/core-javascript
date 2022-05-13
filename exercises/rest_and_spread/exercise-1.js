"use strict"

// Question 1 - use the rest operator to create two variables as follows. Use as few lines as you can - one line is possible!
// `seriesOne` should be be equal to ['Nurse Sharks', 'Episode 2']
// `keyDetails` should be equal to { title: 'Ray\'s Anatomy', firstAired: 2005, cast: ['Fin Diesel', 'Vin Die-seal'] }

const show = {
  title: "Ray's Anatomy",
  firstAired: 2005,
  cast: ["Fin Diesel", "Vin Die-seal"],
  episodes: ["Pilot whale", "Nurse sharks", "Episode 2"],
}

// console.log('seriesOne', seriesOne) // Uncomment to log your answer to the console to confirm
// console.log('keyDetails', keyDetails) // Uncomment to log your answer to the console to confirm

/// Question 2 - use the spread operator to create two variables as follows. Use as few lines as you can - two lines is possible!
// `londonWorker` should equal { firstName: 'Fin', lastName: 'Diesel', location: 'London', jobTitle: 'Shark Hunter', salary: 60000 }
// `remoteWorker` should equal { firstName: 'Fin', lastName: 'Diesel', location: 'Remote', jobTitle: 'Shark Hunter', salary: 60000 }

const person1 = { firstName: "Fin", lastName: "Diesel", location: "London" }
const job1 = { jobTitle: "Shark Hunter", salary: 60000, location: "Remote" }

// console.log('londonWorker', londonWorker) // Uncomment to log your answer to the console to confirm
// console.log('remoteWorker', remoteWorker) // Uncomment to log your answer to the console to confirm

/// Question 3 - use the rest and spread operators to create one variables as follows. Use as few lines as you can - one line is possible!
// `londonJob` should equal { jobTitle: 'Seal Hunter', salary: 60000, location: 'London' }

const person2 = { firstName: "Vin", lastName: "Die-seal", location: "London" }
const job2 = { jobTitle: "Seal Hunter", salary: 60000, location: "Remote" }

// console.log('londonJob', londonJob) // Uncomment to log your answer to the console to confirm

/// Question 4 - use the rest and spread operators to create two variables as follows. Use as few lines as you can - one line is possible!
// `party` should equal 'Democrat'
// `person` should equal { firstName: 'Barack', lastName: 'Obama' }

const polifishian = {
  firstName: "Barracuda",
  lastName: "Obama",
  party: "Democrat",
}

// console.log('party', party) // Uncomment to log your answer to the console to confirm
// console.log('person', person) // Uncomment to log your answer to the console to confirm
