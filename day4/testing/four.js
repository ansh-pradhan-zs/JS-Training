const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved in 1 second");
  }, 1000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved in 2 seconds");
  }, 2000);
});

Promise.race([prom1, prom2]).then((res) => console.log(res));
