// const Graph=require('./graph');
// const graphObj=new Graph();

function BreadthFirst(node){
    const queue=[];
    const visited=[];
    
 
    queue.unshift(node);
    visited.push(node);
    while (queue.length) {
      const current=queue.pop();
      console.log("current//" , current)
      const neighbors=this.getNeighbours(current);
      console.log("neighbors//" , neighbors)
      for (const neighbor of neighbors) {
        const vertex=neighbor.vertex;
        if(visited.includes(vertex)){
          continue;
        }else{
          visited.push(vertex);
          queue.unshift(vertex);
        }
      }
    }
    let result=visited.map(el=>{
      return el.value
    })
    return result.toString();
   }

   module.exports=BreadthFirst;
 