const Graph = require("../graph");
const Vertex = require("../vertex");
const BFS=require('../BFS-Graph')

describe('bradth first',()=>{
    it("success senario", () => {
        let expected="0,2,4,3,5"
        const Graphobj = new Graph();
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const three = new Vertex(3);
        const four = new Vertex(4);
        const five = new Vertex(5);
    
        Graphobj.addVertex(zero);
        Graphobj.addVertex(one);
        Graphobj.addVertex(two);
        Graphobj.addVertex(three);
        Graphobj.addVertex(four);
        Graphobj.addVertex(five);
    
        Graphobj.addDirectedEdge(zero, two);
        Graphobj.addDirectedEdge(two, four);
        Graphobj.addDirectedEdge(two, three);
        Graphobj.addDirectedEdge(four, five);

        
    
        expect(Graphobj.BreadthFirst(zero)).toEqual(expected);
      });
})
