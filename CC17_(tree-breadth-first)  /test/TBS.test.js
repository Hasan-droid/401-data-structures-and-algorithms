'use strict'

const TBS=require('../tree-breadth-first');
const Node=require('../node');
let tree=null;
let one=null;

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
    let eight = new Node(8);
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
    tree = new TBS();
    

});


describe('TEST FIND MAXIMUM VALUE',()=>{

    it('success senario',()=>{
       let  expected_OutOut=[1,2,3 , 6, 4 ,5 ,7 ,8 ,9]
        expect(tree.breadthFirst(one)).toEqual(expected_OutOut)
    })

    it('Hold False input',()=>{
        const test=new TBS();
        expect(test.breadthFirst()).toEqual(false)
    })

    
 
})