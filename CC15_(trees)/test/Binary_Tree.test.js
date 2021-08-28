'use strict';

const { expect } = require('@jest/globals');
const { Binary_Tree} = require('../Binary_Tree');
 const {BinarySearchTree}=require('../Binary_Tree')
const Node = require('../node');
let tree = null;
let searchtree=null;
let eight=null;
let one=null;
let _st , _sec ,_thir ,_forth;

describe('Binary Tree', ()=>{
    let consoleSpy;

    beforeAll(()=> {
        // let one = new Node(20);
        // let ten = new Node(10);
        // let eight = new Node(8);
        // let fifteen = new Node(15);
        // let twelive = new Node(12);
        // let twinty_tow = new Node(22);
        // let twinty_one = new Node(21);
        // let twinty_five = new Node(25);
        // // let nine = new Node(9);

        // one.left=ten;
        // one.right=twinty_tow;
        // ten.left=eight;
        // ten.right=fifteen;
        // fifteen.left=twelive;
        // twinty_tow.right=twinty_five;
        // twinty_tow.left=twinty_one;

         one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
         eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

     
        // create a tree and pass root to it
        tree = new Binary_Tree(one);
         searchtree=new BinarySearchTree(one);
    });

    beforeEach(()=>{
         _st=new Node(10)
         _sec=new Node(1)
         _thir=new Node(2)
         _forth=new Node(11)
         jest.spyOn(console, 'log').mockImplementation();

    });

    afterEach(()=>{
 
    });

    it('test add 1 node' , ()=>{
        let expectedOutput = [1];

        let newtree=new BinarySearchTree();
        newtree.add(_st);
        console.log("add ------>",newtree.preOrder());
        expect(newtree.preOrder()).toEqual([10]);
       
    })
    it('test add left node and right node' , ()=>{
        let expectedOutput = [10 ,1 , 2, 11];
      
        let newtree=new BinarySearchTree();
        newtree.add(_st);
        newtree.add(_sec);
        newtree.add(_thir);
        newtree.add(_forth);
        console.log("add ------>",newtree.preOrder());
        expect(newtree.preOrder()).toEqual(expectedOutput);
       
    })
    it('test Contains' , ()=>{
      
      
        let newtree=new BinarySearchTree();
        newtree.add(_st);
        newtree.add(_sec);
        newtree.add(_thir);
        newtree.add(_forth);
        
        expect(newtree.contains(_sec)).toEqual(true);
       
    })

    it('constructor', ()=>{
        const newTree = new Binary_Tree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });

    it('preOrder', ()=> {
        let expectedOutput = [1,2,6,7,8,9,3,4,5];
        let preOrder = tree.preOrder();
        console.log("preOrder output ---->", preOrder);
        expect(preOrder).toEqual(expectedOutput);
    });

    it('inOrder', ()=> {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        console.log("inOrder output ---->", inOrder);
        expect(inOrder).toEqual(expectedOutput);
    });

    it('postOrder', ()=> {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        console.log("postOrder output ---->", postOrder);
        expect(postOrder).toEqual(expectedOutput);
    });

});