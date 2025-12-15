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

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log(`Standard customer discount: ${calculateDiscount("standard")}`); // Should output: Standard customer discount: 0.05
console.log(`Premium customer discount: ${calculateDiscount("premium")}`);   // Should output: Premium customer discount: 0.15
console.log(`VIP customer discount: ${calculateDiscount("vip")}`);           // Should output: VIP customer discount: 0.25
