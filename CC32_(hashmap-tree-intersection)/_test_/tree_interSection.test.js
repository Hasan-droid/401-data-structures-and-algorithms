'use strict'

const Node = require('../node');
let one=null;
let one_=null;
const treeInterSec=require('../tree_intersection')
describe('tree intersection', ()=>{
    let consoleSpy;

    beforeAll(()=> {
   

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

        one_ = new Node(1);
        let two_ = new Node(11);
        let three_ = new Node(3);
        let four_ = new Node(15);
        let five_ = new Node(13);
        let six_ = new Node(6);
        let seven_ = new Node(10);
         let eight_ = new Node(8);
        let nine_ = new Node(12);

        one_.left = two_;
        one_.right = three_;
        two_.left = six_;
        six_.right = seven_;
        seven_.left = eight_;
        seven_.right = nine_;
        three_.left = four_;
        three_.right = five_;

     
        // create a tree and pass root to it
    
    });

    it("success senario",()=>{
        const output=[1,6,8,3]
        expect(treeInterSec(one , one_)).toEqual(output);
    })
})