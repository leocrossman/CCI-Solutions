const Stack = require('./util/Stack')

const sortStack = stack => {
    const tempStack = new Stack()
    let currMin = Infinity
    let stackDepth = 0

    while(!stack.isEmpty()) {
        if (stack.peek() <= currMin) {
            if(currMin !== Infinity) {
                tempStack.push(currMin)
            }
            currMin = stack.pop()
        } else {
            tempStack.push(stack.pop())
        }
        stackDepth++
    }

    while(!tempStack.isEmpty()) {
        stack.push(tempStack.pop())
    }

    tempStack.push(currMin)
    currMin = Infinity
    stackDepth--

    while (stackDepth > 0) {
        while(!stack.isEmpty()) {
            if (stack.peek() <= currMin) {
                if(currMin !== Infinity) {
                    tempStack.push(currMin)
                }
                currMin = stack.pop()
            } else {
                tempStack.push(stack.pop())
            }
        }

        for(let i = 0; i < stackDepth - 1; i++) {
            stack.push(tempStack.pop())
        }

        tempStack.push(currMin)
        currMin = Infinity
        stackDepth--
    }

    while(!tempStack.isEmpty()) {
        stack.push(tempStack.pop())
    }

    return stack
}

/* TEST */
const s = new Stack();
s.push(99);
s.push(4);
s.push(1);
s.push(6);
s.push(8);
s.push(10);
s.push(22);
s.push(3);
s.push(72);



const sortS = sortStack(s);


while (!sortS.isEmpty()) {
  console.log(sortS.pop());
}
