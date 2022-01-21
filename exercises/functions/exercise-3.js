'use strict'

const numbers = [2, 4, 10, 5, 6]

let total = 0
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i]
}

const average = total / numbers.length

console.log(average)
