// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


 
export function timeToMixJuice(juice) {
  switch (juice) {                        
    case 'Pure Strawberry Joy':
      return 0.5;                        
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;
  let wedges = 0;
  
  while (wedges < wedgesNeeded && limesCut < limes.length) {
    const lime = limes[limesCut];
    switch (lime) {
      case 'small':
        wedges += 6;
        break;
      case 'medium':
        wedges += 8;
        break;
      case 'large':
        wedges += 10;
        break;
    }
    limesCut++;
  }
  return limesCut;
}

export function remainingOrders(minutes, orders) {
  while (minutes > 0 && orders.length > 0) {
    const juice = orders.shift();
    minutes -= timeToMixJuice(juice);
  }
  return orders;
}