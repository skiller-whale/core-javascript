"use strict"
const fs = require('fs')

function multiply(a, b) {
  return a * b
}

function processData(fileName) {
  data = fs.readFileSync(fileName, 'utf8');
  const parsed = JSON.parse(data)
  const result = multiply(parsed.a, parsed.b)
  console.log(result)
}

for (let i = 1; i < 5; i++) {
  processData(`./inputs/${i}.json`)
}