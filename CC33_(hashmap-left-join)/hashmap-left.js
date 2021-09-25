'use srtict'

const HashTable=require('./HashTable')

function leftJoin(hash1 , hash2) {

   const newHash= new HashTable(hash1.size);

   let getkey_value=(hash)=>{
    let arrKeys=[];
    let arrValues=[];
       for(let i=0 ; i<hash.size;i++){
          let set=hash.map[i].head.value;
          let key=Object.keys(set).toString();
          arrKeys.push(key);
          let value=Object.values(set).toString();  
          arrValues.push(value);
       }

       return {arrKeys , arrValues}
   }

   for(let i=0 ; i<hash1.size;i++){
    //    let set=hash1.map[i].head.value
    //   let key=Object.keys(set).toString()
    //   let value=Object.values(set).toString();
       console.log("key>>>",getkey_value(hash2).arrKeys)
       console.log("values>>>",getkey_value(hash2).arrValues)
       let hash1Keys=getkey_value(hash1).arrKeys;
       let hash1values=getkey_value(hash1).arrValues;
       let hash2Keys=getkey_value(hash2).arrKeys;
       let hash2values=getkey_value(hash2).arrValues;

       
       if(hash1.contains(hash2Keys[i])){
           console.log('i from for' , i)
          newHash.add(hash1Keys[i],hash1values[i]);
          newHash.add(hash1Keys[i],hash2values[i]);
       }
       else{
        newHash.add(hash1Keys[i],hash1values[i]);
        newHash.add(hash1Keys[i],null);
       }

   }
    for(let i=0 ; i< newHash.size; i++){
         console.log("returns new hash: ",newHash.get('dillgent'))
    }
      console.log('new hash' ,newHash.map[1].head)
   return newHash;

 

    
}

module.exports=leftJoin;