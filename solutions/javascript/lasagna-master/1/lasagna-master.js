/// <reference path="./global.d.ts" />
// @ts-check

  export function cookingStatus (remainingTime) {
    if ( remainingTime === undefined) {
      return 'You forgot to set the timer.';
    } else if( remainingTime === 0){
      return'Lasagna is done.';
    } else {
      return 'Not done, please wait.';
  }
  }

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  
  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    } else if (layer === 'sauce') {
      sauce += 0.2;
    }
  }
  
  return {
    noodles: noodles,
    sauce: sauce
  };
}

export function addSecretIngredient(friendList,myList) {
  const secretIngredient = friendList[friendList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe,portions) {
   const scaleFactor = portions / 2;
  const scaledRecipe = {};
  
  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
  }
  
  return scaledRecipe;
}
  
