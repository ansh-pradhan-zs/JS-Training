// const arr = [10, 20, 30];

// const newArr = arr.map((item, key) => {
//   //   const obj = {};
//   //   obj[item] = key + 1;
//   //   return obj;

//   return { [item]: key + 1 };
// });

// const filterArr = arr.filter((item) => item % 2 == 0);

// console.log(filterArr);

// // * Asynchronus javascript
//* delay function

// setTimeout(() => {
//   console.log("after 4 secs");
// }, 4000);

// let mypromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Operation succeeeded");
//   } else {
//     reject("operation failed");
//   }
// });

let team1 = new Promise((resolve, reject) => {
  let randomTime = Math.floor(Math.random() * 10);
  setTimeout(() => {
    resolve("team 1 has won");
  }, randomTime);
});

let team2 = new Promise((resolve, reject) => {
  let randomTime = Math.floor(Math.random() * 10);
  setTimeout(() => {
    resolve("team 2 has won");
  }, randomTime);
});

let team3 = new Promise((resolve, reject) => {
  let randomTime = Math.floor(Math.random() * 10);
  setTimeout(() => {
    resolve("team 3 has won");
  }, randomTime);
});

let team4 = new Promise((resolve, reject) => {
  let randomTime = Math.floor(Math.random() * 10);
  setTimeout(() => {
    resolve("team 4 has won");
  }, randomTime);
});

Promise.any([team1, team2, team3, team4]).then((val) => console.log(val));
