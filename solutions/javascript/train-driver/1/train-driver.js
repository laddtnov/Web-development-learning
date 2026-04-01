// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


export function getListOfWagons(...wagons) {
  return wagons;
}


export function fixListOfWagons(ids) {
  const[first, second,...rest] = ids;
  return [...rest, first, second];
}


export function correctListOfWagons(ids, missingWagons) {
 const [first, ...rest] = ids;
  return [first, ...missingWagons, ...rest];
}



export function extendRouteInformation(route, moreRouteInformation) {
  return { ...route, ...moreRouteInformation };
}


export function separateTimeOfArrival(routeinformation) {
  const {timeOfArrival,...rest} =routeinformation;
  return [timeOfArrival,rest];
}
