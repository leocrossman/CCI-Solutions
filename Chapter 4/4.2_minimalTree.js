var Queue = require('./util/Queue');
var BST = require('./util/BST');

const insertBalanced = arr => {
    if (arr.length === 0) return null
    if (arr.length === 1) return new BST(arr[0])

    const midIdx = Math.floor(arr.length / 2)
    const bst = new BST(arr[midIdx])

    bst.left = insertBalanced(arr.slice(0,midIdx))
    bst.right = insertBalanced(arr.slice(midIdx+1))

    return bst
}

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printLevelOrder();

var arr3 = [1, 2, 3, 4, 5];
var tree3 = insertBalanced(arr3);
tree3.printLevelOrder();
