let newProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    console.log("success");
  }, 2000);
});
