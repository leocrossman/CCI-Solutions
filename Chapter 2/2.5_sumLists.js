/*
2.5 Sum Lists
*/

const {LinkedList, Node} = require('./util/LinkedListX')
const printList = require('./util/printList')

const sumListsBack = (n1,n2,carry = 0) => {
    if (n1 === null && n2 === null && carry === 0) return null

    let result = new Node()
    let value = carry
    if(n1 !== null) {
        value += n1.value
    }
    if(n2 !== null) {
        value += n2.value
    }
    result.value = value % 10 // second digit of num

    // recurse
    if (n1 !== null || n2 !== null) {
        let more = new Node(sumListsBack(n1 === null ? null : n1.next,n2 === null? null : n2.next, value >= 10 ? 1 : 0))

        result.next = more
    }
    return result
}

const sumListsForward = (n1,n2) => {
    let len1 = length(n1)
    let len2 = length(n2)

    if (len1 < len2) {
        n1 = padList(n1,len2 - len1)
    } else {
        n2 = padList(n2, len1 - len2)
    }

    // add lists
    // let sum =
    const { head, nextDigitValue } = carryBase10(sumAndAppendNodes(n1, n2), 0)
    return nextDigitValue ? appendToStart(head, new Node(nextDigitValue)) : head
}

const length = n => {
    let len = 0
    while(n) {
        len++
        n = n.next
    }
    return len
}

const padList = (n, padding) => {
    let head = n
    for(let i = 0; i < padding; i++) {
        head = appendToStart(n,new Node(0))
    }
    return head
}

const appendToStart = (head, n) => {
    n.next = head
    return n
}

const sumAndAppendNodes = (n1, n2) => {
    let value = (n1 ? n1.value : 0) + (n2 ? n2.value : 0)
    if (!n1.next && !n2.next) {
        return new Node(value)
    }
    const {
        head,
        nextDigitValue
    } = carryBase10(sumAndAppendNodes(n1.next,n2.next), value)
    return appendToStart(head, new Node(nextDigitValue))
}

const carryBase10 = (head, nextDigitValue) => {
    if (head.value >= 10) {
        head.value = head.value % 10
        nextDigitValue++
    }
    return {
        head,
        nextDigitValue
    }
}

let n1 = new Node(7)
n1.next = new Node(1)
n1.next.next = new Node(6)

let n2 = new Node(5)
n2.next = new Node(9)
n2.next.next = new Node(2)


console.log(sumListsBack(n1,n2)) // 912

n1 = new Node(6)
n1.next = new Node(1)
n1.next.next = new Node(7)

n2 = new Node(2)
n2.next = new Node(9)
n2.next.next = new Node(5)

console.log(sumListsForward(n1,n2)) // 912
