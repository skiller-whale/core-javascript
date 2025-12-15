// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
const discounts = {
  base: 0.05,
  premium: 0.1,
  vip: 0.2,
};

function calculateDiscount(customerType) {
  let discount = discounts.base;
  if (customerType === "premium") {
    discount += discounts.premium;
  } else if (customerType === "vip") {
    discount += discounts.vip;
  }

  return discount;
}

function displayDiscount(customerType) {
  const discount = calculateDiscount(customerType);
  // TODO: return the discount as a percentage string rounded to 0 decimal places (e.g., "5%")
}

function calculateFinalPrice(price, customerType) {
  const discount = calculateDiscount(customerType);
  return price * (1 - discount);
}

function displayFinalPrice(price, customerType) {
  const finalPrice = calculateFinalPrice(price, customerType);
  // TODO: return the final price formatted as a string with a pound sign and 2 decimal places (e.g., "£10.00")
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log(`Standard discount: ${displayDiscount("standard")}`); // Should output: Standard discount: 5%
console.log(`Premium discount: ${displayDiscount("premium")}`);   // Should output: Premium discount: 15%
console.log(`VIP discount: ${displayDiscount("vip")}`);           // Should output: VIP discount: 25%

const price = 10.99;
console.log(`Final price for standard customer: ${displayFinalPrice(price, "standard")}`); // Should output: Final price for standard customer: £10.44
console.log(`Final price for premium customer: ${displayFinalPrice(price, "premium")}`);   // Should output: Final price for premium customer: £9.34
console.log(`Final price for VIP customer: ${displayFinalPrice(price, "vip")}`);           // Should output: Final price for VIP customer: £8.24
