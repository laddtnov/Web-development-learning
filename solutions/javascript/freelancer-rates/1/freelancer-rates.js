// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!


export function dayRate(ratePerHour) {
  return ratePerHour*8;
  
}



export function daysInBudget(budget, ratePerHour) {
 return Math.floor(budget/(ratePerHour*8));
}



export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  const dayRate = ratePerHour * 8;
  const fullMonths = Math.floor(numDays / 22);  
  const remainingDays = numDays % 22;           
  const monthsCost = fullMonths * 22 * dayRate * (1 - discount);
  const remainingCost = remainingDays * dayRate;
  return Math.ceil(monthsCost + remainingCost);
}

