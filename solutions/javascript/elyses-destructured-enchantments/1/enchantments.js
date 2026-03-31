/// <reference path="./global.d.ts" />
// @ts-check


export function getFirstCard(deck) {
  const [first] = deck;
  return first;
}


export function getSecondCard(deck) {
const [, second] = deck;
  return second;
}


export function swapTwoCards(deck) {
 const [first, second] = deck;
  return [second, first];
}


export function shiftThreeCardsAround(deck) {
const [first, second, third] = deck;
  return [second, third, first];
}


export function pickNamedPile({chosen, disregarded}) {
  
  return chosen;
}
  

export function swapNamedPile({chosen, disregarded}) {

  return { chosen: disregarded, disregarded:chosen };
}
