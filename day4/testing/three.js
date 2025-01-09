const prom1 = new Promise((resolve, reject) => {
  resolve("resolved prom");
});

const prom2 = new Promise((resolve, reject) => {
  reject("rejected prom");
});

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 3 seconds");
  }, 3000);
});

Promise.allSettled([prom1, prom2, prom3]).then((res) => console.log(res));
