const {LinkedList,Node} = require('./util/LinkedList')
const Stack = require('./util/Stack')
const Queue = require('./util/Queue')

class StackMin {
    constructor() {
        this.stack = []
        this.mins = [Infinity]
    }

    push(value) {
        if (value < this.min()) {
            this.mins.push(value)
        }
        this.stack.push(value)
    }

    pop() {
        if (!this.isEmpty()) {
            const popped = this.stack.pop()
            if (popped === this.min()) {
                this.mins.pop()
            }
            return popped
        }
    }

    min() {
        return this.mins[this.mins.length - 1]
        // return this.mins[this.mins.length - 1] === -Infinity ? null : this.mins[this.mins.length - 1]
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }
}
