var BST = require('./util/BST');
var {LinkedList} = require('./util/LinkedList');
var Queue = require('./util/Queue');

var BSTp = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  };

const findSuccessor = (node) => {
    if (node === null) return null
    while (node.right) {
        node = node.right
        while (node.left) {
            node = node.left
        }
        return node
    }
    while (node.parent) {
        if (node.parent.value >= node.value) {
            return node.parent
        }
        node = node.parent
    }
}

/* TEST */
var a = new BSTp(10);
var b = new BSTp(2);
var c = new BSTp(3);
var d = new BSTp(4);
var e = new BSTp(6);
var f = new BSTp(5);
var g = new BSTp(7);

a.left = b; b.parent = a;
b.right = c; c.parent = b;
c.right = d; d.parent = c;
d.right = e; e.parent = d;
e.left = f; f.parent = e;
e.right = g; g.parent = e;


console.log(findSuccessor(f).value, 6);
console.log(findSuccessor(g).value, 10);
