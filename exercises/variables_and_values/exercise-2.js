// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function calculateDiscount(customerType) {
  let totalDiscount = 0.05;
  if (customerType === "premium") {
    totalDiscount += 0.1;
  } else if (customerType === "vip") {
    totalDiscount += 0.2;
  }
  return totalDiscount;
}

function userDiscountDisplay(customerType) {
  // TODO: return a string displaying the customer's type and total discount as a percentage
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log(userDiscountDisplay("standard")); // Should output: As a standard customer, your total discount is 5%.
console.log(userDiscountDisplay("premium"));  // Should output: As a premium customer, your total discount is 15%.
console.log(userDiscountDisplay("vip"));      // Should output: As a vip customer, your total discount is 25%.
