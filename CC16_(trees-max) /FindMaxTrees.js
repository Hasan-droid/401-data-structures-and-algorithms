'use strict'
const {Binary_Tree}=require('./Binary_Tree')
class findMaximumValue extends Binary_Tree{

    constructor(root){
         super(root)
    }

    findMax(){
        let max=null;
        if(!this.root)
        {
            return false;
        }

         
            max=this.root.value;
          let traverse=(root)=>{
              if(root)
              if(root.value >= max)
              max=root.value;
            if(root.left) traverse(root.left);
            if(root.right) traverse(root.right);
        
        

    }

    traverse(this.root);
    return max;

}
}


module.exports=findMaximumValue;