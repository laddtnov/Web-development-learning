// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


export function translate2d(dx, dy) {
 return (x, y) => [x + dx, y + dy];
}


export function scale2d(sx, sy) {
 return (x,y) => [x * sx,y * sy];
}


export function composeTransform(f, g) {
  return (x, y) => {
    const [transformedX, transformedY] = f(x, y);
    return g(transformedX, transformedY);
  };
}



export function memoizeTransform(f) {
  let lastX, lastY, lastResult;
  let hasBeenCalled = false;

  return (x, y) => {
    if (hasBeenCalled && x === lastX && y === lastY) {
      
      return lastResult;
    }

   
    lastResult = f(x, y);
    lastX = x;
    lastY = y;
    hasBeenCalled = true;

    return lastResult;
  };
}

