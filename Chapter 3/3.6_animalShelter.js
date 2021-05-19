const {LinkedList,Node} = require('./util/LinkedList')
const Stack = require('./util/Stack')
const Queue = require('./util/Queue')

// note that our queue is implemented using a linkedlist

class AnimalShelter {
    constructor() {
        this.dogQ = new Queue()
        this.catQ = new Queue()
        this.allQ = new Queue()
        this.tempQ = new Queue()
    }

    enqueue(animal) {
        if(animal.type === 'dog') {
            this.dogQ.enqueue(animal)
        } else if (animal.type === 'cat') {
            this.catQ.enqueue(animal)
        }
        this.allQ.enqueue(animal)
    }

    dequeueAny() {
        if (this.allQ.peek() === this.dogQ.peek()) {
            this.dogQ.dequeue()
        } else if (this.allQ.peek() === this.catQ.peek()) {
            this.catQ.dequeue()
        }
        return this.allQ.dequeue()
    }

    dequeueByType(type) {
        let theQ
        if (type === 'dog') {
            theQ = this.dogQ
        } else if (type === 'cat') {
            theQ = this.catQ
        }

        while (!this.allQ.isEmpty() && this.allQ.peek().type !== type) {
            this.tempQ.enqueue(this.allQ.dequeue())
        }

        const animal = this.allQ.dequeue()
        theQ.dequeue()

        while(!this.allQ.isEmpty()) {
            this.tempQ.enqueue(this.allQ.dequeue())
        }

        while(!this.tempQ.isEmpty()) {
            this.allQ.enqueue(this.tempQ.dequeue())
        }
        return animal
    }

    dequeueDog() {
        return this.dequeueByType('dog')
    }

    dequeueCat() {
        return this.dequeueByType('cat')
    }
}


// Tests
var a = new AnimalShelter();
a.enqueue({type:'dog', name:'machi'});
a.enqueue({type:'dog', name:'daisy'});
a.enqueue({type:'cat', name:'peanuts'});
a.enqueue({type:'dog', name:'miso'});
a.enqueue({type:'cat', name:'dada'});
a.enqueue({type:'cat', name:'xiaoxiao'});

console.log(a.dequeueAny(), 'dog machi');

console.log(a.dequeueCat(), 'cat peanuts');

console.log(a.dequeueAny(), 'dog daisy');

console.log(a.dequeueAny(), 'dog miso');
