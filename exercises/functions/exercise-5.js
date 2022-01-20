"use strict"

function add (a, b) {
  return a + b
}

function square (a) {
  return a * a
}

function getFirstNFibonacciNumbers (n) {
  const fibonacciNumbers = [0, 1]
  for (let i = 0; i < n - 2; i += 1) {
    fibonacciNumbers.push(add(fibonacciNumbers[i], fibonacciNumbers[i + 1]))
  }
  return fibonacciNumbers
}

function map (array, transform) {
  const transformed = []
  for (let i = 0; i < array.length; i += 1) {
    transformed.push(transform(array[i]))
  }
  return transformed
}

const firstTenFibonacciNumbers = getFirstNFibonacciNumbers(10)

const firstTenFibonacciNumbersSquared = map(firstTenFibonacciNumbers, square)

console.log(firstTenFibonacciNumbersSquared)