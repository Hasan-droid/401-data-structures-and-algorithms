const Node =require('./node');

class LinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    insert(val){
        let newOne=new Node(val);
        if(!this.head){
            this.head=newOne;
            this.tail=this.head;
        }else{
            this.tail=newOne;
            this.tail.next=newOne;
        }
        this.length++;
        return this.head;
    }

     attach(val){
        let newOne=new Node(val);
        if(!this.head){
            this.head=newOne;
        }else{
            let currentNode=this.head;
            while(currentNode.next){
                currentNode=currentNode.next;
            }

            currentNode.next=newOne;
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

let test = new LinkedList();
test.insert(1);
 test.attach(2);

console.log(test.toString());
console.log(test.includes(2));

module.exports=LinkedList;