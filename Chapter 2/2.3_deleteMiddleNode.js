/*
2.3: Delete Middle Node
Implement an algorithm to delete a node in the middle
(i.e., any node but the first and last node, not necessarily the exact
middle) of a single linked list, given only access to that node.
*/

const LinkedList = require('./util/LinkedListX')
const printList = require('./util/printList')

const delMidNode = (node) => {
    if (node && node.next) {
        node.value = node.next.value
        node.next = node.next.next
    }
}

let list = new LinkedList()
for (let el of [1,2,3,4,5,6]) {
    list.append(el)
}

printList(list.head)
delMidNode(list.head.next)
printList(list.head)