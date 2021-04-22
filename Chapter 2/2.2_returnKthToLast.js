/*
2.2 Return Kth to Last:
Implement an algorithm to find the kth to last element of a
singly linked list.
*/

const LinkedList = require('./util/LinkedListX')

const getKtoLast = (list, k) => {
    let fast = list.head
    let slow = list.head

    for(let i = 0; i < k; i++) {
        if (fast === null) return null // k > list.length
        fast = fast.next
    }

    while (fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow
}

// quick test
let list = new LinkedList();
for (let elem of [1, 2, 3, 4, 5]) {
  list.append(elem);
}

const result = getKtoLast(list, 2);

console.log(result); // 3