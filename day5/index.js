class Counter {
  constructor() {
    this.count = 0;
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.count = this.count + 1;
    console.log(this.count);
  }

  start() {
    setInterval(this.increment, 1000);
    // setInterval(() => this.increment(), 1000);
  }
}

const counter = new Counter();
counter.start();
