var BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  };

const firstCommonAncestor = (root,p,q) => {
    if (!covers(root,p) || !covers(root,q)) {
        return null
    } else if (covers(p,q)) {
        return p
    } else if (covers(q,p)) {
        return q
    }

    let sibling = getSibling(p)
    let parent = p.parent
    while (!covers(sibling,q)) {
        sibling = getSibling(parent)
        parent = parent.parent
    }
    return parent
}

const covers = (root,p) => {
    if (root === null) return false
    if (root === p) return true
    return covers(root.left, p) || covers(root.right, p)
}

const getSibling = node => {
    if (node === null || node.parent === null) return null
    const parent = node.parent
    return parent.left === node ? parent.right : parent.left
}


  /* TEST */
var a = new BinaryTree('a');
var b = new BinaryTree('b');
var c = new BinaryTree('c');
var d = new BinaryTree('d');
var e = new BinaryTree('e');
var f = new BinaryTree('f');
var g = new BinaryTree('g');
var h = new BinaryTree('h');
var i = new BinaryTree('i');
var j = new BinaryTree('j');
var k = new BinaryTree('k');
var l = new BinaryTree('l');

a.left = b; b.parent = a;
a.right = c; c.parent = a;
b.left = d; d.parent = b;
d.left = g; g.parent = d;
d.right = h; h.parent = d;
h.right = k; k.parent = h;
k.left = l; l.parent = k;
c.left = e; e.parent = c;
c.right = f; f.parent = c;
f.left = i; i.parent = f;
f.right = j; j.parent = f;

console.log(firstCommonAncestor(a, g, k), 'd');
console.log(firstCommonAncestor(a, b, i), 'a');
