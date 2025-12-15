// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function calculateFinalPrice(totalPrice, customerType) {
  baseDiscount = 0.05;

  if (customerType === "premium") {
    extraDiscount = 0.10;
    totalDiscount = baseDiscount + extraDiscount;
  } else if (customerType === "vip") {
    extraDiscount = 0.20;
    totalDiscount = baseDiscount + extraDiscount;
  } else {
    totalDiscount = baseDiscount;
  }
  
  finalPrice = totalPrice * (1 - totalDiscount);
  return finalPrice;
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log(calculateFinalPrice(100, "standard")); // Should output: 95
console.log(calculateFinalPrice(100, "premium"));  // Should output: 85
console.log(calculateFinalPrice(100, "vip"));      // Should output: 75
