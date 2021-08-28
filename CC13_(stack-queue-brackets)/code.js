'use strict'

class dddd{
 constructor(){



 }

 validateBrackets(array){

    let str=this.descrite(array)
    let leftShapes=['[','(','{'];
    let rightShapes=[']' , ')' , '}'];
    let length=str.length;
    let endOfQueue=0;
    let leftStack=[];
    let rightStack=[];
    

   let traverse=(str , shape , rightShape)=>{
       console.log('------> str', str)
       let bracket=shape;
       let rightBracket=rightShape;
       console.log('----. bracket' , bracket)
    let left=str.shift();
    let right=left;
    console.log('-----> left' , left)
    console.log(str)
    console.log(left , endOfQueue);
    if(bracket==left){
        console.log("matched" , left)
        leftStack.push(left);
        endOfQueue++;
        if(endOfQueue>=length)
        return;
       traverse(str , bracket , rightBracket)
       
      
    }
  else if(rightBracket == right){
      console.log('right =======>' , right)
    rightStack.push(right);
    endOfQueue++;
    if(endOfQueue>=length)
    return;
   traverse(str , bracket , rightBracket)

  }
    str.push(left);
    endOfQueue++;
  
    if(endOfQueue>=length)
    return false;
    traverse( str, bracket , rightBracket)
  }

  for(let i=0 ; i<3 ; i++){
      console.log('i ---->' , i)
      let reNewArray=str;
      endOfQueue=0;
   console.log( "----> returns",traverse(reNewArray,leftShapes[i] , rightShapes[i]));
}

console.log("left Stack ---->",leftStack);
console.log("right Stack ---->",rightStack);
if(leftStack.length != rightStack.length)
return false;
let temp=0;
while(leftStack.length > 0)
{  let leftPOP=leftStack.pop();
   let  rightPOP=rightStack.pop();
    console.log('------> left pop', leftPOP , '-----> right pop' ,rightPOP)
    if(leftPOP=='[' && rightPOP ==']' || leftPOP=='(' && rightPOP ==')' || leftPOP=='{' && rightPOP =='}' )
    temp++;
    else return false;
}
return true;



 
  
 }


    descrite(str ){

        let Q=[];
        let i=0
        while(str.length >i)
        {
            Q[i]=str.substring(i , i+1);
            i++
        }
         
        console.log(Q)
        return Q;
       
    }
}


let trys=new dddd();
console.log(trys.validateBrackets('([([ssdsds])sdsdsse)]'))

module.exports=dddd;