// @ts-check




export function needsLicense(kind) {
 return kind === 'car' || kind === 'truck';
}



export function chooseVehicle(option1, option2) {
  let choice;

  if (option1 < option2) {
    choice = option1;
  } else {
    choice = option2;
  }

  return choice + " is clearly the better choice.";
}


export function calculateResellPrice(originalPrice, age) {
  let percentage;

  if (age < 3) {
    percentage = 0.8; // 80%
  } else if (age >= 3 && age <= 10) {
    percentage = 0.7; // 70%
  } else {
    percentage = 0.5; // 50%
  }

  return originalPrice * percentage;
}
