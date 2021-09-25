class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class LinkedList{

    constructor(){
        this.head=null;
    }

     append(value) {

      let  node = new Node(value);
        if(!this.head)
        return this.head=node;
       
        let temp=this.head;
        while(temp.next)
        {
            temp=temp.next;
        }

        temp.next=node;

    
      
    }
}

module.exports=LinkedList;