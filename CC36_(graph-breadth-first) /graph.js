
const Vertex = require('./vertex');
const Edge = require('./edge');
const { off } = require('process');

// using Adjacency List way
class Graph {
   constructor(){
       this.adjacencyList=new Map();
   }


    addVertex(vertex){
        this.adjacencyList.set(vertex,[]);
    }

    addDirectedEdge(start , end , weight){
        if(!this.adjacencyList.has(start) || !this.adjacencyList.has(end) ){
            console.log("Vertx Does not exist");
            return;
        }

        let adjacencies=this.getNeighbours(start);
        adjacencies.push(new Edge(end , weight))
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log("vertex does not exist")
            return;
        }
        console.log(`get(${vertex.value})==>${this.adjacencyList.get(vertex)}`)
        return this.adjacencyList.get(vertex);
    }

    getNodes(){
        let collection=[];
        for (const [vertex,edge] of this.adjacencyList.entries()){
            console.log("k = ", vertex, " v =", edge);
              collection.push(vertex )
            
            
           
        }
        console.log(collection)
        return collection;


    }

    size(){
        try{
            let size=0;
            for(const vertex of this.adjacencyList.entries()){
                size++;
            }
            console.log("size" , size)
            return size;
        }catch(err){
            console.log(err.message)
        }
    
    }

     BreadthFirst(node){
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
            console.log('vertex' , vertex)
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


}


const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
// myGraph.addDirectedEdge(one, three);
// myGraph.addDirectedEdge(five, three);

console.log("------ neighbours of 5------")
console.log(myGraph.getNeighbours(five));

myGraph.getNodes();
myGraph.size();

module.exports=Graph;