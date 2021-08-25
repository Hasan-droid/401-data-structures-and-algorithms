'use strict';

class Queue{
    constructor(){
        this.storage=new Array();
        this.size=0;

    }

    enqueue(data){
        this.storage.push(data);
        this.size++;

    }

    dequeue(data){
        if(!this.isEmpty()){
            this.size--;
            return this.storage.shift();
        }
        
       
    }

    peek(){
        return this.storage[0];
    }

    isEmpty(){
        if(this.size > 0)
        return false;
        return true;
     }

}

module.exports=Queue;