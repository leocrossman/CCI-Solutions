var BST = require('./util/BST');
var {LinkedList} = require('./util/LinkedList');
var Queue = require('./util/Queue');

const listOfDepthsDFS = (root, lists = [], level = 0) => {
    if (root === null) return null
    let list
    if (lists.length === level) {
        list = new LinkedList()
        lists.push(list)
    } else {
        list = lists[level]
    }
    list.append(root)
    listOfDepthsDFS(root.left, lists, level + 1)
    listOfDepthsDFS(root.right, lists, level + 1)
    return lists
}

const listOfDepthsBFS = root => {
    const lists = []
    let curr = new LinkedList()
    if (root) {
        curr.append(root)
    }
    // dirty way of checking if linked list has elements
    while (curr._toArray().length) {
        lists.push(curr)
        let parents = curr
        curr = new LinkedList()
        parents._toArray().forEach(parent => {
            if (parent.left) {
                curr.append(parent.left)
            }
            if (parent.right) {
                curr.append(parent.right)
            }
        })
    }
    return lists
}

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepthsDFS(tree))
console.log(listOfDepthsBFS(tree))

