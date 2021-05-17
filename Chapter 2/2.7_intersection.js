/*
2.7 Intersection:

Done using two stacks
*/

const {LinkedList,Node} = require('./util/LinkedListX')
const printList = require('./util/printList')

const peek = stack => stack[stack.length-1]

const intersection = (h1, h2) => {
    const stack1 = []
    const stack2 = []

    while(h1) {
        stack1.push(h1)
        h1 = h1.next
    }

    while(h2) {
        stack2.push(h2)
        h2 = h2.next
    }

    if (stack1.length === 0 || stack2.length === 0) {
        return null
    } else if (peek(stack1) !== peek(stack2)) {
        return null
    } else {
        let intersect
        while (peek(stack1) === peek(stack2)) {
            intersect = peek(stack1)
            stack1.pop()
            stack2.pop()
        }
        return intersect
    }
}



let n1 = new Node(3)
let n2 = new Node(1)
let n3 = new Node(5)
let n4 = new Node(9)
let n5 = new Node(7)
let n6 = new Node(2)
let n7 = new Node(1)

let n8 = new Node(4)
let n9 = new Node(6)

n1.next = n2
n1.next.next = n3
n1.next.next.next = n4
n1.next.next.next.next = n5
n1.next.next.next.next.next = n6
n1.next.next.next.next.next.next = n7

n8.next = n9
n8.next.next = n5

// printList(n1)
// console.log('\n')
// printList(n8)

console.log(intersection(n1,n8))
