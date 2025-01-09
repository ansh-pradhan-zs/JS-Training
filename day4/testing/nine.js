function randomPromise(id) {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve(`promise ${id} resolved`);
      } else {
        resolve(`promise ${id} rejected`);
      }
    }, Math.random * 1000);
  });
}

async function handleRandomPromises() {
  const promises = [
    randomPromise(1),
    randomPromise(2),
    randomPromise(3),
    randomPromise(4),
    randomPromise(5),
  ];

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1}: Success - ${result.value}`);
    } else {
      console.log(`Promise ${index + 1}: Failure - ${result.reason}`);
    }
  });
}

handleRandomPromises();
