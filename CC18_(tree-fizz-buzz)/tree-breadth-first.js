'use strict'

const {Binary_Tree}=require('./Binary_Tree')

class TBS extends Binary_Tree{

    constructor(){
        super();
    }
  
    breadthFirst(tree){
       let Q=[];
       let Q2=[];
           let traverse=(root)=>{
              if(!root){
                return false;
              }
            
            
            let rootShifted=root;
           Q2.push(rootShifted);
            if(rootShifted.left)Q.push(rootShifted.left);
             if(rootShifted.right)Q.push(rootShifted.right);
            traverse(Q.shift());
        }
   
        traverse(tree);
        let output=[];
        if(tree){
            Q2.forEach(i=>output.push(i.value));
            console.log('--------> output' , output)
            return output;

        }
        return false;
       
    }

    
}


module.exports=TBS;