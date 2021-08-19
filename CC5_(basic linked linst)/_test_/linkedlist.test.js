'use strict';

let LinkedList = require('../linked-linst');

describe('LinkedList', ()=> {

    it('constructor()', ()=> {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
        expect(newList.tail).toBeNull();
        expect(newList.length).toEqual(0);
    });

    it('insert()',()=>{
        let newList=new LinkedList();
        newList.insert(1);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next).toBeNull();
    });
    it('attach() nodes',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.attach(2);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next.value).toEqual(2);
    });
   
    it('include() TRUE condition',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.attach(2);
        expect(newList.includes(2)).toEqual(true);
    });
    it('include() FALSE condition',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.attach(2);
        expect(newList.includes(5)).toEqual(false);
    });
    it('toString()',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.attach(2);
        expect(newList.toString()).toEqual("1\n2\n");
    });
   


});

