const {LinkedList,Node} = require('./util/LinkedList')
const Stack = require('./util/Stack')
const Queue = require('./util/Queue')

// dynamic stack size
class TripleStack {
    constructor() {
        this.stack = []
        this.lengths = [0,0,0]
    }

    _getLength(stackNum) {
        return this.lengths[stackNum - 1] // get length of stack 1, 2, or 3
    }

    push(stackNum, value) {
        const idx = this._getLength(stackNum) * 3 + stackNum - 1
        this.stack[idx] = value
        ++this.lengths[stackNum - 1]
    }

    pop(stackNum) {
        const stackLength = this._getLength(stackNum)
        let value
        if (stackLength > 0) {
            const stackIdx = (stackLength - 1) * 3 + stackNum - 1
            value = this.stack[stackIdx]
            this.stack[stackIdx] = undefined
            this.lengths[stackNum - 1]--
        }
        return value
    }

    peek(stackNum) {
        const stackLength = this._getLength(stackNum)
        let value
        if (stackLength > 0) {
            const stackIdx = (stackLength - 1) * 3 + stackNum - 1
            value = this.stack[stackIdx]
        }
        return value
    }

    isEmpty(stackNum) {
        return this._getLength(stackNum) === 0
    }

}
