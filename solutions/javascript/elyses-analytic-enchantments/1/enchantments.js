// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


export function getCardPosition(stack, card) {
  return stack.indexOf(card);
}


export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

export function isEachCardEven(stack) {
 return stack.every(card=> card % 2 === 0);
}


export function doesStackIncludeOddCard(stack) {
 return stack.some(card=> card % 2 !== 0);
}


export function getFirstOddCard(stack) {
  return stack.find(card=> card % 2 !== 0);
}


export function getFirstEvenCardPosition(stack) {
  return stack.findIndex(card=> card% 2 === 0);
}
