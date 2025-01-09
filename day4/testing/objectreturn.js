const arr = [10, 20, 30];

const ans = arr.reduce((obj, el, ind) => {
  obj[el] = ind + 1;
  return obj;
}, {});

console.log(ans);
