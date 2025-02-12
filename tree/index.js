// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(element){
        this.data = element;
        this.children =[];
    }
    add(element){
        this.children.push(new Node(element));
    }
    remove(element){
        this.children.splice(this.children.indexOf(element), 1);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }


    traverseBF(fn) {
        const queue = [this.root]; 

        while (queue.length) {
            const node = queue.shift(); 
            fn(node);


            queue.push(...node.children);
        }
    }

    // Depth-First Traversal (DF)
    traverseDF(fn) {
        function traverse(node) {
            fn(node); 


            for (let child of node.children) {
                traverse(child);
            }
        }

        if (this.root) {
            traverse(this.root);
        }
    }
}
module.exports = { Tree, Node };
