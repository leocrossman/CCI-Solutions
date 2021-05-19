const {LinkedList,Node} = require('./util/LinkedList')
const Stack = require('./util/Stack')
const Queue = require('./util/Queue')
const BST = require('./util/BST')
const Graph = require('./util/Graph')
const Tree = require('./util/Tree')

const checkRoute = (n1, n2, graph) => {
    const q1 = new Queue()
    const q2 = new Queue()

    visited1 = {}
    visited2 = {}

    visited1[n1] = true
    visited2[n2] = true

    q1.enqueue(n1)
    q2.enqueue(n2)

    if (graph.hasNode(n1)) {
        for (const edge in graph.findEdges(n1)) {
            q1.enqueue(edge)
        }
    }
    if (graph.hasNode(n2)) {
        for (const edge in graph.findEdges(n2)) {
            q2.enqueue(edge)
        }
    }

    let nextEdge1
    let nextEdge2

    while(!q1.isEmpty() || !q2.isEmpty()) {
        if (!q1.isEmpty()) {
            nextEdge1 = q1.dequeue()
            if (nextEdge1 === n2) {
                return true
            }
            if (visited1[nextEdge1] === undefined) {
                visited1[nextEdge1] = true
                if(graph.hasNode(nextEdge1)) {
                    for(const edge in graph.findEdges(nextEdge1)) {
                        q1.enqueue(edge)
                    }
                }
            }
        }
        if(!q2.isEmpty()) {
            nextEdge2 = q2.dequeue()
            if (nextEdge2 === n1) {
                return true
            }
            if (visited2[nextEdge2] === undefined) {
                visited2[nextEdge2] = true
                if(graph.hasNode(nextEdge2)) {
                    for (const edge in graph.findEdges(nextEdge2)) {
                        q2.enqueue(edge)
                    }
                }
            }
        }
    }
    return false
}

/* TEST */
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('A', 'F');
graph.addEdge('F', 'C');

graph.addEdge('D', 'E');


console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
console.log(checkRoute('B', 'A', graph), true);
console.log(checkRoute('D', 'E', graph), true);
