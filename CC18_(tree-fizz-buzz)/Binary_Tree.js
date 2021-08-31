const node = require("./node");


class Binary_Tree {

    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let results = [];

        let traverse = (node) => {
            results.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }

    inOrder() {
        let results = []
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            results.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return results;
    }

    postOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        }
        traverse(this.root)
        return results;
    }

}

class BinarySearchTree extends Binary_Tree {
    constructor(root) {
        super(root);


    }


    add(node) {
        if (!this.root) {
            this.root = node;
            return;
        }

     
        let traverse = (root) => {
            if (node.value < root.value) {
                if (root.left == null) {
                    root.left = node;
                    return;
                }
                traverse(root.left);
            }
            if (node.value > root.value) {

                if (root.right == null) {
                    root.right = node;
                    return;
                }
                traverse(root.right);
            }
        }
        traverse(this.root);
    }

    contains(node){
        if (!this.root) {
          
            return false;
        }

        let indecies=this.preOrder();
        console.log(indecies)
       let found= indecies.find(i=>i==node.value)
       if(found != null)
       return true
       return false;
         
           
               
              
            
           
         
        
     
    }
}
let root = new node(10)
let tstnode = new node(1)
let tstnode2 = new node(2)
let tstnode3 = new node(11)
let tstnode4 = new node(13)
let testy = new BinarySearchTree(root);
testy.add(tstnode)
testy.add(tstnode2)
 testy.add(tstnode3)
testy.add(tstnode4)
console.log(testy.contains(tstnode3))
console.log(testy.preOrder())
console.log(testy.root.value)


module.exports = { Binary_Tree, BinarySearchTree };
