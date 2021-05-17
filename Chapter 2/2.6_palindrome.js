/*
2.6 Palindrome:
Implement a function to check if a linked list is a palindrome
*/

const {LinkedList,Node} = require('./util/LinkedListX')
const printList = require('./util/printList')

const isPalindrome = node => {
    let reversed = reverseAndClone(node)
    return isEqual(node, reversed)
}

// solution from the book but this leaves a node at the end with value `undefined` so it fails...
const reverseAndClone = node => {
    let head = new Node()
    while (node) {
        let n = new Node(node.value)
        n.next = head // point to old head
        head = n // set new head
        node = node.next
    }
    return head
}

const isEqual = (one,two) => {
    while (one && two) {
        if (one.data !== two.data) {
            return false
        }
        one = one.next
        two = two.next
    }
    return one === null && two === null
}

let n1 = new Node(0)
n1.next = new Node(1)
n1.next.next = new Node(2)
n1.next.next.next = new Node(1)
n1.next.next.next.next = new Node(0)

// printList(n1)
console.log(isPalindrome(n1))
