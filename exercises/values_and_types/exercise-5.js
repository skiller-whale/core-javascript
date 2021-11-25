function betterTypeOf (value) {
    if (true) { // the expression here must evaluate to true to execute the code inside this block
        return
    } else if (true) { // the expression here must evaluate to true to execute the code inside this block
        return
    } else { // everything else will enter this block
        return
    }
}

console.log(betterTypeOf(12))
console.log(betterTypeOf('string'))
console.log(betterTypeOf(['array']))
console.log(betterTypeOf({ objectProperty: 'prop'}))
console.log(betterTypeOf(null))
console.log(betterTypeOf(undefined))
console.log(betterTypeOf(function test () {}))
console.log(betterTypeOf(true))
console.log(betterTypeOf(false))