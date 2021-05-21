// directed graph
var Graph = require('./util/Graph');

Graph.prototype.findNodeWithNoChildren = function() {
    for (var node in this.nodes) {
      if (Object.keys(this.nodes[node]).length === 0) {
        return node;
      }
    }
    return undefined;
  };

const buildOrder = (projects, dependencies) => {
    const graph = new Graph()
    projects.forEach(project => {
        graph.addNode(project)
    })
    dependencies.forEach(dependency => {
        graph.addEdge(dependency[1],dependency[0])
    })
    const answer = []
    let currNode = graph.findNodeWithNoChildren()
    while (currNode) {
        answer.push(currNode)
        graph.removeNode(currNode)
        currNode = graph.findNodeWithNoChildren()
    }
    if (answer.length === projects.length) {
        return answer
    } else {
        throw Error
    }
}

/* TEST */
var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));
// output: f, e, a, b, d, c
