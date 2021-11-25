let a = 1
a + 5
console.log(1, ": ", a)

let b = a + 5
console.log(2, ": ", b)

a = a + 2
console.log(3, ": ", a)

let emptyObject = {}

let newObject = emptyObject
newObject.property = 'hello'
console.log(4, ": ", newObject)

console.log(5, ": ", emptyObject)

let helloString = 'hello'
helloString[0] = 'x'
console.log(6, ": ", helloString)

let helloArray = ['h', 'e', 'l', 'l', 'o']
helloArray[0] = 'y'
console.log(7, ": ", helloArray)

const object = {}
object.secret = undefined
console.log(8, ": ", object)

const x = 5
x = x + 5
console.log(9, ": ", x)