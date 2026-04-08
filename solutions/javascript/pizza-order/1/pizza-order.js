/// <reference path="./global.d.ts" />
//
// @ts-check

export function pizzaPrice(pizza, ...extras) {
  let price = 0;

  if (pizza === "Margherita") price = 7;
  else if (pizza === "Caprese") price = 9;
  else if (pizza === "Formaggio") price = 10;

  for (let i = 0; i < extras.length; i++) {
    if (extras[i] === "ExtraSauce") {
      price += 1;
    } else if (extras[i] === "ExtraToppings") {
      price += 2;
    }
  }

  return price;
}

export function orderPrice(pizzaOrders) {
  let total = 0;

  for (let i = 0; i < pizzaOrders.length; i++) {
    let price = 0;

    if (pizzaOrders[i].pizza === "Margherita") price = 7;
    else if (pizzaOrders[i].pizza === "Caprese") price = 9;
    else if (pizzaOrders[i].pizza === "Formaggio") price = 10;

    for (let j = 0; j < pizzaOrders[i].extras.length; j++) {
      if (pizzaOrders[i].extras[j] === "ExtraSauce") {
        price += 1;
      } else if (pizzaOrders[i].extras[j] === "ExtraToppings") {
        price += 2;
      }
    }

    total += price;
  }

  return total;
}