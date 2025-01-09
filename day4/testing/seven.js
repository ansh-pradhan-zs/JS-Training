let sharedVariable = 0;
function asyncIncrement(name) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 100);
    setTimeout(() => {
      const temp = sharedVariable;
      console.log(`${name} reads sharedVariable: ${temp}`);
      sharedVariable = temp + 1;
      console.log(`${name} updates sharedVariable to: ${sharedVariable}`);
      resolve();
    }, delay);
  });
}

async function simulateRaceCondition() {
  console.log("Starting race condition simulation...");

  await Promise.all([asyncIncrement("Task A"), asyncIncrement("Task B")]);

  console.log(`Final value of sharedVariable: ${sharedVariable}`);
}

simulateRaceCondition();
