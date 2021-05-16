class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let node = new Node(value)
        // if list is empty
        if(!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
    }

    prepend(value) {
        let node = new Node(value)
        node.next = this.head
        this.head = node
    }

    pop() {
        let curr = this.head

        // if no item
        if (!curr) return null
        // if one item
        if (!curr.next) {
            this.head = null
            return curr
        }

        // go to 2nd to last
        while (curr.next.next) {
            curr = curr.next
        }

        let last = this.tail
        this.tail = curr
        this.tail.next = null
        return last
    }

    popFirst() {
        let first = this.head

        if (this.head && this.head.next) {
            this.head = this.head.next
            first.next = null
        }
        else this.head = null
        return first
    }

    head() {
        return this.head
    }

    removeAt(index) {
        let i = 0;
        let curr = this.head
        let prev = null

        while (curr != null) {
            if (i == index) {
                // remove
                if (prev == null)
                    this.head = curr.next
                else prev.next = curr.next
                curr.next = null;
                return curr.value
            } else {
                prev = curr;
                curr = curr.next
                i++
            }
        }

        return null
    }

    insertAt(index, value) {
        if (index === 0) return this.prepend(value)
        let curr = this.head
        let i = 0

        while (curr != null) {
            if (i == index - 1) {
                let node = new Node(value)
                node.next = curr.next
                curr.next = node
                return true
            } else {
                i++
                curr = curr.next
            }
        }
        return false
    }

    tail() {
        return this.tail
    }

    _toArray() {
        let arr = []
        let curr = this.head
        while(curr) {
            arr.push(curr.value)
            curr = curr.next
        }

        return arr
    }
}

module.exports = {LinkedList, Node}

  /* TEST */

  // let l = new LinkedList();
  // l.append(3);
  // l.append(4);
  // l.append(10);
  // l.append(20);
  // l.append(5);

  // console.log(l.removeAt(1), 4);
  // console.log(l.pop().value, 5);

  // console.log(l._toArray());
  // l.insertAt(2, 40);
  // console.log(l._toArray());
