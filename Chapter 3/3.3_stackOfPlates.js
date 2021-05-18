const {LinkedList,Node} = require('./util/LinkedList')
const Stack = require('./util/Stack')
const Queue = require('./util/Queue')

class SetOfStacks {
    constructor(capacity) {
        this.capacity = capacity
        this.stackSet = []
    }

    getLastStack() {
        return this.stackSet[this.stackSet.length - 1]
    }

    push(value) {
        const last = this.getLastStack()
        if(this.stackSet.length === 0 || last.size() === this.capacity) {
            const newStack = new Stack()
            newStack.push(value)
            this.stackSet.push(newStack)
        } else {
            last.push(value)
        }
    }

    pop() {
        if(this.stackSet.length === 0) return undefined
        const last = this.getLastStack()
        const popped = last.pop()
        if (last.size() === 0) {
            this.stackSet.pop()
        }
        return popped
    }

    peek() {
        if(this.stackSet.length === 0) return undefined
        const last = this.getLastStack()
        return last.peek()
    }

    isEmpty() {
        return this.stackSet.length === 0
    }

    popAt(index) {
        if (index < 0 || index >= this.stackSet.length) return false
        const value = this.stackSet[index].pop()
        if (this.stackSet[index].size() === 0) {
            this.stackSet.splice(index,1) // remove the stack from the set if empty
        }
        return value
    }
}


/* TESTS */

var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

console.log(s.peek(), 14);

s.popAt(2);
s.popAt(2);
s.popAt(2);

console.log(s.peek(), 14);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

console.log(s.peek(), 2);
