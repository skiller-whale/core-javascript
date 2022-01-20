"use strict"

const popularNamesByDecade = [
  { name: 'Noah', sex: 'male', occurrences: 182993, decade: 2010 },
  { name: 'Emma', sex: 'female', occurrences: 194755, decade: 2010 },
  { name: 'Liam', sex: 'male', occurrences: 173717, decade: 2010 },
  { name: 'Olivia', sex: 'female', occurrences: 184291, decade: 2010 },
  { name: 'Jacob', sex: 'male', occurrences: 273911, decade: 2000 },
  { name: 'Emily', sex: 'female', occurrences: 223714, decade: 2000 },
  { name: 'Michael', sex: 'male', occurrences: 250610, decade: 2000 },
  { name: 'Madison', sex: 'female', occurrences: 193172, decade: 2000 },
  { name: 'Michael', sex: 'male', occurrences: 462360, decade: 1990 },
  { name: 'Jessica', sex: 'female', occurrences: 303111, decade: 1990 },
  { name: 'Christopher', sex: 'male', occurrences: 360231, decade: 1990 },
  { name: 'Ashley', sex: 'female', occurrences: 301809, decade: 1990 },
  { name: 'Michael', sex: 'male', occurrences: 663830, decade: 1980 },
  { name: 'Jessica', sex: 'female', occurrences: 469510, decade: 1980 },
  { name: 'Christopher', sex: 'male', occurrences: 554953, decade: 1980 },
  { name: 'Jennifer', sex: 'female', occurrences: 440886, decade: 1980 },
  { name: 'Michael', sex: 'male', occurrences: 707619, decade: 1970 },
  { name: 'Jennifer', sex: 'female', occurrences: 581768, decade: 1970 },
  { name: 'Christopher', sex: 'male', occurrences: 475613, decade: 1970 },
  { name: 'Amy', sex: 'female', occurrences: 269004, decade: 1970 }
]

const popularNames = []

for (let i = 0; i < popularNamesByDecade.length; i += 1) {
  let name = popularNamesByDecade[i].name
  let alreadyAdded = false

  for (let j = 0; j < popularNames.length; j += 1) {
    if (popularNames[j] === name) {
      alreadyAdded = true
    }
  }

  if (alreadyAdded === false) {
    popularNames.push(name)
  }
}

console.log(popularNames)
