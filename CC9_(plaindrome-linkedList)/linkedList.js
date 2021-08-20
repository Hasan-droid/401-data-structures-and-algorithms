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

    
    reverseLinkedList(node){
       let previosNode=null;
        while(node!=null){
            let NextNode=node.next;
            node.next=previosNode;
            previosNode=node;
            node=NextNode;
        }

        return previosNode;
    }

    isPalindrome(){
        let fast=this.head;
        let slow=this.head;
        console.log('#####96' , slow.value)
        while(fast != null && fast.next !=null){
            console.log('#####98' , slow.value)
            console.log('#####99'  , fast.value)
            slow=slow.next;
            fast=fast.next.next;
        }

        fast=this.head;
     
         slow=this.reverseLinkedList(slow);

        while(slow !== null){
            console.log("#####slow",slow.value)
            console.log("#####fast",fast.value)
            if(slow.value !== fast.value)
            return false;

            slow=slow.next;
            fast=fast.next;
        }

        // console.log("#####slow",slow.value)
        console.log("#####fast",fast.value)

        return true;
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
test.append(2);
test.append(1);

// test.insertBefore(3 , 5)
// test.insertAfter(1 , 4)

console.log(test.toString())
console.log(test.isPalindrome())

module.exports=LinkedList;