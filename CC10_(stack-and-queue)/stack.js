'use strict';
const Node=require('./node');

class Stack{
    constructor(){
        this.top=null;
    }

    isEmpty(){
        if(!this.top){
            return true;
        }

        return false;
        
    }

    push(data){
        let newNode=new Node(data);
        if(this.top){
            newNode.next=this.top;
            this.top=newNode;
        }
        this.top=newNode;
    }

    pop(){
        if(!this.isEmpty()){
            if(this.top){
                let current=this.top;
                let popedItem=this.top.value;
                this.top=current.next;
                return popedItem;
            }

        }

        return this.isEmpty();
       

       
    }

    peek(){
        if(!this.isEmpty()){
            let data;
            if(this.top){
                data=this.top.value;
                return data;
            }
        }
       
        return this.isEmpty()

        
    }

    toString(){
        let current=this.top;
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




let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());


module.exports=Stack;