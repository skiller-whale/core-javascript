// 1. a === b
const a = ["hello", "goodbye"];
const b = ["hello", "goodbye"];
console.log("1.", a === b);

// 2. a[0] === b[0]
console.log("2.", a[0] === b[0]);

// 3. c === d
const c = ["hello", "goodbye"];
const d = c;
console.log("3.", c === d);

// 4. e == f
const e = "12";
const f = 12;
console.log("4.", e == f);

// 5. g === h
const g = "hello";
const h = "hello";
console.log("5.", g === h);

// 6. i === j
const i = new String("hello");
const j = new String("hello");
console.log("6.", i === j);

// 7. i == j
console.log("7.", i == j);

// 8. l === m
const k = 12;
const l = k.toString();
const m = k.toString();
console.log("8.", l === m);

// 9. l == m
console.log("9.", l == m);

// 10. n == o
const n = null;
const o = undefined;
console.log("10.", n == o);
