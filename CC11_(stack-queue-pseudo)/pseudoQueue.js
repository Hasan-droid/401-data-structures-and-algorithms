'use strict'
const Stack=require('./stack');

class PesudoQueues{
    constructor(){
        this.stack_1=new Stack();
        this.stack_2=new Stack();
    }

    enqueue(data){
        this.stack_1.push(data);
    }

    dequeue(){
        if(this.stack_2.isEmpty()){
            while(!this.stack_1.isEmpty()){
               this.stack_2.push(this.stack_1.pop())
            }
         
        }
        return this.stack_2.pop();
    }
}
module.exports=PesudoQueues;