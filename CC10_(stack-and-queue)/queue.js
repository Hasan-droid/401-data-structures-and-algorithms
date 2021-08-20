'use strict';

const Node=require('./node');

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    isEmpty(){
        if(!this.front){
            return true;
        }
        return false;
    }

    enqueue(data){
        let newNode=new Node(data);
        if(!this.front){
            this.front=newNode;
            this.rear=newNode;
            return;
        }
        this.rear.next=newNode;
        this.rear=newNode;

    }

    dequeue(){
        if(!this.isEmpty()){
            let last=this.front;
            if(this.front === this.rear);
            this.rear=null;

            this.front=this.front.next;
            return last.value;
        }

        return this.isEmpty();
    }

    peek(){
        let val;
        if(!this.isEmpty()){
            val=this.front.value;
            return val;
        }

        return this.isEmpty()
        
    }

    toString(){
        let current=this.front;
        if(!current){
            throw new Error("Empty Linked List")
        }

        let output="";
        while(current){
            output+=`${current.value}\n`
            current=current.next;
        }

        return output;
    }

}

let queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.dequeue();

console.log(queue.toString());

module.exports=Queue;