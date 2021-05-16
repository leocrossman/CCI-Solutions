/*
2.4 Partition:
Write code to partition a lnked list around a value x, such that all nodes less than x come before all nodes
greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less
than x. The partition element x can appear anywhere in the "right partition";
it does not need to appear between the left and right partitions.
*/

const {Node} = require('./util/LinkedListX')
const printList = require('./util/printList')

const partition = (node, partition) => {
    let head = node
    let tail = node

    while (node) {
        let next = node.next
        if (node.value < partition) {
            node.next = head
            head = node
        } else {
            tail.next = node
            tail = node
        }

        node = next
    }
    tail.next = null

    return head
}

let n1 = new Node(3)
n1.next = new Node(5)
n1.next.next = new Node(8)
n1.next.next.next = new Node(5)
n1.next.next.next.next = new Node(10)
n1.next.next.next.next.next = new Node(2)
n1.next.next.next.next.next.next = new Node(1)

printList(partition(n1,5))
