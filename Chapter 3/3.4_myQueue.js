const Stack = require('./util/Stack')

class MyQueue {
    constructor() {
        this.stackNew = new Stack()
        this.stackOld = new Stack()
    }

    enqueue(value) {
        for(let i = 0; i < this.stackOld.length; i++) {
            this.stackNew.push(this.stackOld.pop())
        }
        this.stackNew.push(value)
    }

    dequeue() {
        while(this.stackNew.length > 0) {
            this.stackOld.push(this.stackNew.pop())
        }
        return this.stackOld.pop()
    }

    peek() {
        if(this.stackNew.length > 0) {
            return this.stackNew[0]
        }
        return this.stackOld[this.stackOld.length - 1]
    }
}
