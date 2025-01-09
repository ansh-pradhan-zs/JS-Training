const prom1 = new Promise((resolve, reject) => {
  resolve(1);
});

const prom2 = new Promise((resolve, reject) => {
  resolve("resolved with string");
});

const res = Promise.all([prom1, prom2]).then((res) => console.log(res));
