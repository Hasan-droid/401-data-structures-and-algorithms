'use strict'


const LinkedList=require('./LinkedList');

class HashTable{

    constructor(size){
        this.size=size;
        this.map=new Array(size);

    }

    hash(key){
        return key.split(' ').reduce((acc , char)=>{
            // console.log("char.charCodeAt(0)====>",char.charCodeAt(0))
            return acc+char.charCodeAt(0);
        } , 0)* 599 % this.size;
    }

    add(key , value){
       let hash=this.hash(key);
       if(!this.map[hash]){
        console.log("hash>>>",hash)
        this.map[hash]=new LinkedList();
       }
      
       let entry={[key]:value};
       console.log("{entry}" , entry)
       this.map[hash].append(entry);
       if(this.map[hash].head.next)
       console.log("bucket2",this.map[hash].head.next.value)
       console.log('bucket' , this.map[hash].head.value)
      
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
      console.log("value from get" , value)
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