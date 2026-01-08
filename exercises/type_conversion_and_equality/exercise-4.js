// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function typeOf(value) {
  // TODO: implement this function
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log(typeOf(12));                 // should log: "number"
console.log(typeOf(NaN));                // should log: "bad-number"
console.log(typeOf(Infinity));           // should log: "bad-number"
console.log(typeOf(-Infinity));          // should log: "bad-number"
console.log(typeOf("string"));           // should log: "string"
console.log(typeOf([]));                 // should log: "array"
console.log(typeOf({}));                 // should log: "object"
console.log(typeOf(null));               // should log: "null"
console.log(typeOf(undefined));          // should log: "undefined"
console.log(typeOf(function test() {})); // should log: "function"
console.log(typeOf(true));               // should log: "boolean"
