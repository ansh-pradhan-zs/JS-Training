const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved with string");
  }, 2000);
});

const res = Promise.all([prom1, prom2]).then((res) => console.log(res));
