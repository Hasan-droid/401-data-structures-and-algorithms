'use-strict'

const HashTable=require('./HashTable')

function treeInterSection(tree1 , tree2) {

   

   let preOrder=(tree)=>{
    let results = [];

    let traverse = (node) => {
        results.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(tree);
    return results;
   }

   let tree1Array=preOrder(tree1);
   let tree2Array=preOrder(tree2);
  //  const hashMapTree1=new HashTable(tree1Array.length)
   const hashMapTree2=new HashTable(tree2Array.length)

  //  console.log("tree1Array: " , tree1Array , 'hashMapTree1: ' , hashMapTree1[1] , 'tree1Array[1]: ' , tree1Array[1])

   for(let i =0 ; i<tree1Array.length ; i++){
    hashMapTree2.add(`key ${tree2Array[i]}`,tree2Array[i])
    // hashMapTree1.add('value: '+tree1Array[i],tree1Array[i]);
   
   }

   let results=[]

   for(let i=0 ; i<tree1Array.length;i++){
     console.log('hashedvalueTree1: ',hashMapTree2.hash("value:"+tree1Array[i]),"tree1Array[i]: ",tree1Array[i])
     console.log(' hashvalueTree2.hash: ',hashMapTree2.hash('value:'+tree2Array[i]),"tree2Array[i]: ",tree2Array[i])
       if(hashMapTree2.contains("key "+tree1Array[i])){

         results.push(tree2Array[i])
       }
   }


  return results;
    
}

module.exports=treeInterSection;