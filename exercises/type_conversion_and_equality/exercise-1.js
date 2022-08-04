"use strict"

function validator (input) {
  // write your code here
}

function currencyFormatter (number, currencySymbol) {
  // write your code here
}

const inputs = [25.129, "25.129", 'hello', '1.23e+5', '0XF', 'NaN']

for (let i = 0; i < inputs.length; i++) {
  const num = validator(inputs[i])
  if (num !== undefined) console.log(currencyFormatter(num, "£"))
}
