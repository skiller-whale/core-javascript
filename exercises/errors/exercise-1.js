"use strict"
// 1.
try {
  const array = []
  array.length = 10**10
} catch (e) {
  console.log(1, e.name, ':', e.message)
}

try {
  dog = 'Clifford'
} catch (e) {
  console.log(2, e.name, ':', e.message)
}

try {
  const array = []
  array.toUpperCase()
} catch (e) {
  console.log(3, e.name, ':', e.message)
}

try {
  function thing () {
    thing()
  }
  thing()
} catch (e) {
  console.log(4, e.name, ':', e.message)
}

try {
  const dog = 'Clifford'
  dog = 'Lassie'
} catch (e) {
  console.log(5, e.name, ':', e.message)
}

try {
  const sum = true + false
  console.log(6, 'This does not cause an error. The value of sum is', sum)
} catch (e) {
  console.log(6, e.name, ':', e.message)
}
