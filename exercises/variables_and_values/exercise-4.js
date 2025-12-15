// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
const couponDiscounts = {
  WELCOME10: 0.1,
  SUMMER20: 0.2,
  VIP50: 0.5,
};

function createCustomer(name) {
  // TODO: return a customer object with the given name
  // and an array of coupons, with an initial coupon of "WELCOME10"
}

function addCoupon(customer, couponCode) {
  // TODO: add the given coupon code to the customer's array of coupons
}

function applyLatestCoupon(totalPrice, customer) {
  let discount = 0;
  // TODO: remove the latest coupon from the customer's array of coupons
  // and look up its discount value from the couponDiscounts object -
  // if there's a valid coupon, set the discount variable to its value

  const finalPrice = totalPrice * (1 - discount);
  return finalPrice;
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const alice = createCustomer("Alice");

addCoupon(alice, "VIP50");
addCoupon(alice, "SUMMER20");
console.log("Alice's coupons:", alice.coupons); // Should output: Alice's coupons: [ 'WELCOME10', 'VIP50', 'SUMMER20' ]

const totalPrice = 200;
const finalPrice = applyLatestCoupon(totalPrice, alice);
console.log("Final price:", finalPrice); // Should output: Final price: 160
console.log("Remaining coupons:", alice.coupons); // Should output: Remaining coupons: [ 'WELCOME10', 'VIP50' ]
