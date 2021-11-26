const a = ['hello', 'goodbye']
const b = ['hello', 'goodbye']
console.log(1, ": ", a === b)

console.log(2, ": ", a[0] === b[0])
// 2. a[0] === b[0]

const c = ['hello', 'goodbye']
const d = c
console.log(3, ": ", c === d)
// 3. c === d

const e = '12'
const f = 12
console.log(4, ": ", e == f)
// 4. e == f

const g = 'hello'
const h = 'hello'
console.log(5, ": ", g === h)
// 5. g === h

const i = new String('hello')
const j = new String('hello')
console.log(6, ": ", i === j)
// 6. i === j
console.log(7, ": ", i == j)
// 7. i == j

const k = 12
const l = k.toString()
const m = k.toString()
console.log(8, ": ", l === m)
// 8. l === m
console.log(9, ": ", l == m)
// 9. l == m

const n = null
const o = undefined
console.log(10, ": ", n == o)
// 10. n == o