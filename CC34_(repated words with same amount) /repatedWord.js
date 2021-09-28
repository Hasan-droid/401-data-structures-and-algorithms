'use strict'
const hashMap=require('./HashTable')
function repatedWord(text) {

    
    const wordsArr=text.toLowerCase().split(" ")
    const hashTable=new hashMap(wordsArr.length) 
    for(let i=0 ; i<wordsArr.length ; i++ )
    {   console.log("word" , wordsArr[i] , 'contains ?: ',hashTable.contains(wordsArr[i]), 'hash: ',hashTable.hash(wordsArr[i]), 'i ' , i )  
           
        
            
          
            hashTable.add(wordsArr[i],wordsArr[i])
        
              
          
    }
      for(let i =0 ; i<hashTable.size;i++)
    {
      // console.log(`wordsArr[${i}]==>`,wordsArr[i])
      if(hashTable.contains(wordsArr[i]))
      {
        console.log("returned words hash table",hashTable.map[i]?.head.next?.value, "i",i )  
        return wordsArr[i]
      }
        
    
    }
   return false;
  
  
}

module.exports= repatedWord;