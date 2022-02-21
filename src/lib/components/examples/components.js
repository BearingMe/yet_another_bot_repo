class Components {
  constructor() {
    this.queue = [];
  }

  add(fn) {
    this.queue.push(fn);
  }

  next() {
    const fn = this.queue.shift();

    if (fn) {
      fn(this.next.bind(this));
    }
  }

  run() {
    this.next();
  }
}

exports.Components = Components;
