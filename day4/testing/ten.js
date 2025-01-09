const num1 = new Promise((resolve, reject) => {
  resolve(10);
});
const num2 = new Promise((resolve, reject) => {
  resolve(20);
});
const num3 = new Promise((resolve, reject) => {
  resolve(10);
});

num1.then((res1) =>
  num2.then((res2) => num3.then((res3) => console.log((res1 + res2) * res3)))
);
