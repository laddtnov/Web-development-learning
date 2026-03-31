// @ts-check


export function twoSum(array1, array2) {
return Number(array1.join('')) + Number(array2.join(''))
   
 }


export function luckyNumber(num) {
  const str = String(num);
  return str === str.split('').reverse().join('');
}


export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  }
  if (!Number(input)) {
    return 'Must be a number besides 0';
  }
  return '';
}
 

