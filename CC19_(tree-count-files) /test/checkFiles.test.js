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

     one = new Node("folder");
    let two = new Node("folder");
    let three = new Node("folder");
    let four = new Node("file");
    let five = new Node("folder");
    let six = new Node("folder");
    let seven = new Node("file");
    let eight = new Node("file");
    let nine = new Node("folder");

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

    it('success senario----> both directories have same number of files',()=>{
       let one_1 = new Node("folder");
        let two_2 = new Node("folder");
        let three_3 = new Node("folder");
        let four_4 = new Node("file");
        let five_5 = new Node("folder");
        let six_6 = new Node("folder");
        let seven_7 = new Node("file");
        let eight_8 = new Node("file");
        let nine_9 = new Node("folder");
    
        one_1.left = two_2;
        one_1.right = three_3;
        two_2.left = six_6;
        six_6.right = seven_7;
        seven_7.left = eight_8;
        seven_7.right = nine_9;
        three_3.left = four_4;
        three_3.right = five_5;

        expect(tree.checkfiles(one, one_1)).toEqual(true);
    
    })

    it('falid senario---->  directories have not same number of files',()=>{
        let one_1 = new Node("folder");
         let two_2 = new Node("folder");
         let three_3 = new Node("file");
         let four_4 = new Node("file");
         let five_5 = new Node("folder");
         let six_6 = new Node("folder");
         let seven_7 = new Node("file");
         let eight_8 = new Node("file");
         let nine_9 = new Node("folder");
     
         one_1.left = two_2;
         one_1.right = three_3;
         two_2.left = six_6;
         six_6.right = seven_7;
         seven_7.left = eight_8;
         seven_7.right = nine_9;
         three_3.left = four_4;
         three_3.right = five_5;
 
         expect(tree.checkfiles(one, one_1)).toEqual(false);
     
     })

    // it('Hold False input',()=>{
    //     const test=new TBS();
    //     expect(test.breadthFirst()).toEqual(false)
    // })

    
 
})