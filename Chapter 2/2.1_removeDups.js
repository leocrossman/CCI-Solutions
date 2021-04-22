/*
2.1: Remove Dups:
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

const LinkedList = require("./util/LinkedListX");

const removeDuplicates = (list) => {
    const _set = new Set()
    let curr = list.head
    let prev = null
    while (curr) {
        if(_set.has(curr.value)) {
            // dup found
            let el = curr
            prev.next = curr.next
            curr = curr.next
            el.next = null
        }
        else {
            // add to set
            _set.add(curr.value)
            prev = curr
            curr = curr.next 
        }
    }
    return list
}

// quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

removeDuplicates(list);

console.log(list._toArray()); // [1, 5, 6, 8]