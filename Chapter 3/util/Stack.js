// simple implementation of a stack
// using an Array

/*
Interface:
- push(value)
- pop()
- peek()
- isEmpty()
- size()
*/
class Stack {
    constructor() {
      this.data = [];
    }

    size() {
      return this.data.length;
    }

    isEmpty() {
      return this.size() == 0;
    }

    push(value) {
      this.data.push(value);
    }

    pop() {
      return this.data.pop();
    }

    peek() {
      if (this.isEmpty()) return null;
      return this.data[this.size() - 1];
    }

    _toArray() {
      return this.data;
    }
  }

  module.exports = Stack;
