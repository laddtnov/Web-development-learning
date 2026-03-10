// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Now help Annalyn free her best friend!


export function canExecuteFastAttack(knightIsAwake) {
   return !knightIsAwake;
 
}

export function canSpy(knightIsAwake,archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
   
}


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
   return !archerIsAwake && prisonerIsAwake;
 
}


export function canFreePrisoner(knightIsAwake,archerIsAwake,prisonerIsAwake,petDogIsPresent,) {
  return (petDogIsPresent && !archerIsAwake) || (!knightIsAwake && !archerIsAwake && prisonerIsAwake);
}
