// @ts-check


export function seeingDouble(deck) {
return deck.map(card => card * 2);
  
}


export function threeOfEachThree(deck) {
  return deck.flatMap(card => card === 3 ? [3, 3, 3] : card);
}


export function middleTwo(deck) {
  return deck.slice(4, 6);
}



export function sandwichTrick(deck) {
 const middle = Math.floor(deck.length / 2);
  const first = deck[0];
  const last = deck[deck.length - 1];
  
  const middle1 = deck.slice(1, middle);
  const middle2 = deck.slice(middle, deck.length - 1);
  
  return [...middle1, last, first, ...middle2];
}


export function twoIsSpecial(deck) {
return deck.filter(card => card === 2);
}


export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}


export function reorder(deck) {
 return deck.reverse();
}
