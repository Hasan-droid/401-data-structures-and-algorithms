'use strict'

const {Binary_Tree}=require('./Binary_Tree')

class TBS extends Binary_Tree{

    constructor(){
        super();
    }

    checkfiles(directory_1 , directory_2){
        let result_Directory1=this.breadthFirst(directory_1);
        let result_Directory2=this.breadthFirst(directory_2);
        {console.log("-------->" , result_Directory1 , "--------->"  ,result_Directory2)
        if(result_Directory1 == result_Directory2)
        
            return true;
        }
     
        return false;
    }
  
    breadthFirst(tree){
       let Q=[];
       let Q2=[];
       let count=0;
           let traverse=(root)=>{
              if(!root)
                return false;
              
           let rootShifted=root;
           if(rootShifted.value=='file')
           count++;
           Q2.push(rootShifted);
            if(rootShifted.left)Q.push(rootShifted.left);
             if(rootShifted.right)Q.push(rootShifted.right);
            traverse(Q.shift());
        }
   
        traverse(tree);
        // let output=[];
        if(tree){
            // Q2.forEach(i=>output.push(i.value));
            // console.log('--------> output' , output)
            return count;

        }
        return false;
       
    }

    
}


module.exports=TBS;