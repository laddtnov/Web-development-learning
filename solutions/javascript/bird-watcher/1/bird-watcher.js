// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i< birdsPerDay.length; i++) {
    total = total + birdsPerDay[i];
    
    
  }
  return total;
}



export function birdsInWeek(birdsPerDay, week) {
let total = 0;
  const start = (week - 1) * 7;
  const end = week * 7;
  for (let i = start; i < end; i++) {
    total = total + birdsPerDay[i];
  }
  return total;
}


export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] = birdsPerDay[i] + 1;
  }
  return birdsPerDay;
}
  
