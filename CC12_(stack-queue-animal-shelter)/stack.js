'use strict'

class Stack{
    constructor(){
        this.storage=new Array();
        this.top=null;
        this.indx=0;
        this.size=0;
    }

    push(val){
        this.storage.unshift(val);
        this.top=val;
        size++;
    }

    pop(){
        let val=this.storage.shift();
        this.top=this.storage[0];
        size--;
        return val;
    }

    peek(){
        return this.top;
    }

    isEmpty(){
       if(this.size > 0)
       return false;
       return true;
    }
}

module.exports=Stack;