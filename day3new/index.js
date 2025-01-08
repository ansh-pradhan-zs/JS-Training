function add(x) {
  let sum = x;
  return function resultFn(y) {
    if (arguments.length) {
      sum += y;
      return resultFn;
    }
    return sum;
  };
}

console.log(add(2)(3)(4)());
