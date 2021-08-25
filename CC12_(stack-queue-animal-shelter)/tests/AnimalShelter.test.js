'use strict'

const { AnimalShelter } = require("../AnimalShelter");



describe('testing animal shellter', ()=>{
  

let animal1={type :'dog' , name:'me'};
let animal2={type :'dog' , name:'me2'};
let animal3={type :'dog' , name:'also me'};
let animal4={type :'cat' , name:'not me'};

it('add new cat',()=>{
    let shelter=new AnimalShelter();
    shelter.enqueue(animal4);
    expect(shelter.cat.storage[0].name).toEqual('not me')
});
it('add new dog',()=>{
    let shelter=new AnimalShelter();
  shelter.enqueue(animal1);
     expect(shelter.dog.storage[0].name).toEqual('me')
});
it('test empty Q',()=>{
    let shelter=new AnimalShelter();
   shelter.enqueue(animal1);
  shelter.dequeue(animal1);
 expect(shelter.dog.isEmpty()).toEqual(true);
});
it('test not empty Q',()=>{
    let shelter=new AnimalShelter();
   shelter.enqueue(animal1);
 
 expect(shelter.dog.isEmpty()).toEqual(false);
});

it('push new animal type',()=>{
    let shelter=new AnimalShelter();
    let newtype={type:'lion' , name:'ltuc'}
   
 
 expect(shelter.enqueue(newtype)).toBeNull();
});

it('pop new animal type',()=>{
    let shelter=new AnimalShelter();
    let newtype={type:'lion' , name:'ltuc'}
   
 
 expect(shelter.dequeue(newtype)).toBeNull();
});


})