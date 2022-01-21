'use strict'

function tossCoin () {
  return Math.random() > 0.5 ? 'heads' : 'tails'
}

for (let i = 0; i < 5; i += 1) {
  console.log(tossCoin())
}
