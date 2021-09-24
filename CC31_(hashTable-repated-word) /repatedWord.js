'use strict'
const hashMap=require('./HashTable')
function repatedWord(text) {


    const wordsArr=text.split(" ")
    const hashTable=new hashMap(wordsArr.length) 
    for(let i=0 ; i<wordsArr.length ; i++ )
    {   console.log("word" , wordsArr[i] , 'contains ?: ',hashTable.contains(wordsArr[i]), 'hash: ',hashTable.hash(wordsArr[i]), 'i ' , i )  
           
          if(!hashTable.contains(wordsArr[i])){
            
          
            hashTable.add(wordsArr[i],wordsArr[i])
          }
              
          else{
              console.log("returned word",wordsArr[i] , 'i ' , i)
          
            return wordsArr[i]
          }
              
    }
    
}

module.exports= repatedWord;