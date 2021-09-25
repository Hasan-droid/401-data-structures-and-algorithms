'use strict'

const HashTable=require('../HashTable')
const leftJoin=require('../hashmap-left')
let h1 , h2;
describe('hash map left join',()=>{

beforeAll(()=> {
   
 h1= new HashTable(3);
 h2= new HashTable(2);

h1.add('fond','enammed');
h1.add('wrath','anger');
h1.add('dillgent','employed');

h2.add('fond','averse');
h2.add('warth','anger');

   // create a tree and pass root to it

});

it("all work",()=>{
   
        expect(leftJoin(h1,h2)).toEqual(true)
   

  
})
});
