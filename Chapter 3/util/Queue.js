// implement a queue using linkedLists
var LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this._list = new LinkedList();
  }

  enqueue(value) {
    this._list.append(value);
  }

  dequeue() {
    let node = this._list.popFirst();
    return node.value;
  }

  peek() {
    return this._list.head ? this._list.head.value : null;
  }

  isEmpty() {
    return this._list.head == null;
  }

  _toArray() {
    return this._list._toArray();
  }
}

// alias
Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;

module.exports = Queue;
