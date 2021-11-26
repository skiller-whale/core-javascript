function betterTypeOf (value) {
    if (true) { // the expression here must evaluate to true to execute the code inside this block
        return
    } else if (true) { // the expression here must evaluate to true to execute the code inside this block
        return
    } else { // everything else will enter this block
        return
    }
}

console.log(betterTypeOf(12)) // 'number'
console.log(betterTypeOf('string')) // 'string'
console.log(betterTypeOf(['array'])) // 'array'
console.log(betterTypeOf({ objectProperty: 'prop'})) // 'object'
console.log(betterTypeOf(null)) // 'null'
console.log(betterTypeOf(undefined)) // 'undefined'
console.log(betterTypeOf(function test () {})) // 'function'
console.log(betterTypeOf(true)) // 'boolean'
