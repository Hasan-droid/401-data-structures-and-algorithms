"use strict";

const { error } = require("console");
let LinkedList = require("../linkedList");



describe("LinkedList.js TESTS", () => {
    let spy;
    beforeEach(()=>{
        spy=jest.spyOn(console , 'log').mockImplementation();
    });
  it("the initial constructor()", () => {
    let newOne = new LinkedList();
    expect(newOne.head).toBeNull();
    expect(newOne.tail).toBeNull();
    expect(newOne.length).toEqual(0);
  });

  it("insert() TEST", () => {
    let newList = new LinkedList();
    newList.insert(4);
    expect(newList.head.value).toEqual(4);
    expect(newList.head.next).toBeNull();
  });
  it("insert() more than 1 node TEST", () => {
    let nodeList = new LinkedList();
    nodeList.insert(1);
    nodeList.append(2);
    expect(nodeList.head.value).toEqual(1);
    expect(nodeList.head.next.value).toEqual(2);
  });
  it("insertBefore()  TEST", () => {
    let nodeList = new LinkedList();
    nodeList.insert(1);
    nodeList.append(2);
    nodeList.append(3);
    nodeList.insertBefore(2, 7);
    expect(nodeList.head.value).toEqual(1);
    expect(nodeList.head.next.value).toEqual(7);
  });
  it("insertAfter()  TEST", () => {
    let nodeLI = new LinkedList();
    nodeLI.insert(1);
    nodeLI.append(2);
    nodeLI.append(3);
    nodeLI.insertAfter(1, 4);
    expect(nodeLI.head.value).toEqual(1);
    expect(nodeLI.head.next.value).toEqual(4);
  });
  it("append() string value TEST", () => {
    let newList = new LinkedList();
    let initialValue = "First Item";
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = "Second Item";
    newList.append(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);
  });
  it("include() success TEST", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    expect(newList.includes(2)).toEqual(true);
  });
  it("include() false TEST", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    expect(newList.includes(5)).toEqual(false);
  });
  it(" kthFromEnd(k) Success TEST", ()=>{
    let test =new LinkedList();
    test.insert(1);
    test.append(2);
    test.append(4);
    expect(test.kthFromEnd(1)).toEqual(4)
  })
  it(" kthFromEnd(k) k is biger than linkedlist false TEST", ()=>{
    let test =new LinkedList();
    test.insert(1);
    test.append(2);
    test.append(4);
    expect(test.kthFromEnd(5)).toEqual(false);
  })
  it(" kthFromEnd(k) k is same size false TEST", ()=>{
    let test =new LinkedList();
    test.insert(1);
    test.append(2);
    test.append(4);
    expect(test.kthFromEnd(4)).toEqual(false);
  })
  it(" kthFromEnd(k) k is not poostive integer false TEST", ()=>{
    let test =new LinkedList();
    test.insert(1);
    test.append(2);
    test.append(4);
    expect(test.kthFromEnd(-1)).toThrow();
  })
  it("toString() TEST", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    expect(newList.toString()).toEqual("1\n2\n");
  });

});