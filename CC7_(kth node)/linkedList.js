const { pbkdf2 } = require('crypto');
const Node=require('./node');

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    insert(val){
        let newnode=new Node(val);
        if(!this.head){
           this.head=newnode;
           this.tail=this.head;
        }else{
            this.tail=newnode;
            this.tail.next=newnode
        }
        this.length++;
        return this.head;
    }

    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
        }else{
            let currentNode=this.head;
            while(currentNode.next){
                currentNode=currentNode.next;
            }
            currentNode.next=newNode;
        }
    }

    insertBefore(value , newValue){
        let newNode=new Node(newValue);
        let currentNode=this.head;
        if(currentNode.value == value){
            newNode.next=currentNode;
            this.head=newNode;
        }
        while(currentNode.next){
            if(currentNode.next.value==value){
                newNode.next=currentNode.next;
                currentNode.next=newNode;
                break;
            }
            currentNode=currentNode.next;
        }
    }

    insertAfter(value , newValue){
        let newNode=new Node(newValue);
        let currentNode=this.head;
        while(currentNode){
            if(currentNode.value==value){
                newNode.next=currentNode.next;
                currentNode.next=newNode;
                break;
            }

            currentNode=currentNode.next;
        }
    }

    includes(val){
        
        let current=this.head;
        while(current){
            if(current.value == val)
            return true;
            current=current.next;
        }

        return false;
           
    }

    kthFromEnd(k){
      
      //  k needs to be postive integer and greater than 0 
        if(k <= 0){
            throw new Error("Must be positive integer value of k.")
        }
       let pointer1=this.head;
        let pointer2=this.head;
          if(pointer1.next == null){
              console.log("linked list is size of 1")
              return ; 
          }
        for(let i=0 ; i < k -1 ; i++){
            if(!pointer2)
           {    console.log("k is greater than the length of the linked list.");
                  return ;
            }
            
           
            pointer2=pointer2.next;
            
        }
        if(!pointer2)
        return console.log("k is the size of the linked list.")

        while(pointer2.next){
            pointer1=pointer1.next;
            pointer2=pointer2.next;
        }
       
        return pointer1.value;
      
    }


    toString(){
        let current=this.head;
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

let test =new LinkedList();
test.insert(1);
test.append(2);
test.append(4);
test.append(4);
// test.insertBefore(3 , 5)
// test.insertAfter(1 , 4)

console.log(test.kthFromEnd(5));

module.exports=LinkedList;