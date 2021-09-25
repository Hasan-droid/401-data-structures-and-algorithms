'use strict'


const LinkedList=require('./LinkedList');

class HashTable{

    constructor(size){
        this.size=size;
        this.map=new Array(size);

    }

    hash(key){
        console.log("hash key" , key)
        if(key==undefined)
        return false;
        return key.split("").reduce((acc , char)=>{
        
            return acc+char.charCodeAt(0);
        } , 0)* 599 % this.size;
    }

    add(key , value){
       let hash=this.hash(key);
       if(!this.map[hash]){
     
        this.map[hash]=new LinkedList();
       }
      
       let entry={[key]:value};
    
       this.map[hash].append(entry);
    
      
    }

    get(key){
        let hash=this.hash(key);
        if(!this.map[hash])
        return false
       
        
        let temp=this.map[hash].head;
        let value=temp.value.name;
              while(temp.next){
            value+="\n"+temp.next.value.name;
            temp=temp.next;
        }
   
        return value;
    }

    contains(key){

        let hash=this.hash(key);
        if(!this.map[hash])
        return false
       return true;

    }
    

}

module.exports=HashTable;