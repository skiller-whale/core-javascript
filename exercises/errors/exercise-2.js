"use strict"
const fs = require('fs')

function processData(fileName) {
  data = fs.readFileSync(fileName, 'utf8');
  const parsed = JSON.parse(data)
  console.log(parsed.a * parsed.b)
}

for (let i = 1; i < 5; i++) {
  console.log(processData(`./inputs/${i}.json`))
}