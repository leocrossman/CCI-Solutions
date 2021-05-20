const { ninvoke } = require('q');
var BST = require('./util/BST');
var {LinkedList} = require('./util/LinkedList');
var Queue = require('./util/Queue');

const checkBalanced = (root, level = 0) => {
    if (root.left && !root.right) {
        if (root.left.left || root.left.right) {
            return false
        }
    }
    if (!root.left && root.right) {
        if (root.right.left || root.right.right) {
            return false
        }
    }

    let answer = true
    // recur
    if (root.left) {
        answer = answer && checkBalanced(root.left)
    }
    if (root.right) {
        answer = answer && checkBalanced(root.right)
    }
    return answer
}

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);
