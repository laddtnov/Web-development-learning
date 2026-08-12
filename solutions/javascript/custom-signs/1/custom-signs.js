// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.



export function buildSign(occasion, name) {
return `Happy ${occasion} ${name}!`
}

export function buildBirthdaySign(age) {
  if (age >= 50) {
    return "Happy Birthday! What a mature fellow you are.";
  } else {
    return "Happy Birthday! What a young fellow you are.";
  }
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

export function costOf(sign, currency) {
  const basePrice = 20;
  const costPerCharacter = 2;
  const totalCost = basePrice + (sign.length * costPerCharacter);
  return `Your sign costs ${totalCost.toFixed(2)} ${currency}.`;
}