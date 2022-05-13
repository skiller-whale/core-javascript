"use strict"

function betterTypeOf(value) {
  if (true) {
    // the expression above must evaluate to true to execute the code inside this block
    return
  } else if (true) {
    // the expression above must evaluate to true to execute the code inside this block
    return
  } else {
    // everything else will enter this block
    return
  }
}

console.log(betterTypeOf(12)) // "number"
console.log(betterTypeOf("string")) // "string"
console.log(betterTypeOf([])) // "array"
console.log(betterTypeOf({})) // "object"
console.log(betterTypeOf(null)) // "null"
console.log(betterTypeOf(undefined)) // "undefined"
console.log(betterTypeOf(function test() {})) // "function"
console.log(betterTypeOf(true)) // "boolean"
