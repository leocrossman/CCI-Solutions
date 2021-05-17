/*
2.7 Intersection:

Done using two stacks
*/

const {LinkedList,Node} = require('./util/LinkedListX')
const printList = require('./util/printList')

const loopDetectionWithSet = head => {
    const set = new Set()

    while (head) {
        if (!set.has(head)) {
            set.add(head)
        } else {
            return head
        }
        head = head.next
    }
}

const loopDetectionFastSlow = head => {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) break // collision
    }

    if (!fast || !fast.next) return null

    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return fast
}



let nA = new Node('A')
let nB = new Node('B')
let nC = new Node('C')
let nD = new Node('D')
let nE = new Node('E')

nA.next = nB
nB.next = nC
nC.next = nD
nD.next = nE
nE.next = nC

// printList(nA)

// console.log(loopDetectionWithSet(nA))
console.log(loopDetectionFastSlow(nA))
