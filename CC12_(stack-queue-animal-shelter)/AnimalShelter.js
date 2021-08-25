'use strict'

const queue=require('./Queue');
// const Animal=require('./Animal');

class AnimalShelter{
    constructor(){
        this.cat=new queue();
        this.dog=new queue();
    }

    enqueue(animal){
        if(animal.type==='dog'){
            this.dog.enqueue(animal);
            return this.dog;
        }
        else if(animal.type==='cat'){
            this.cat.enqueue(animal);
            return this.cat;
        }

        return null;
    }

    dequeue(pref){
        if(pref.type==='dog'){
       return this.dog.dequeue(pref);
        
    }else if(pref.type==='cat'){
       return this.cat.dequeue(pref);
    }
    return null;
}


}


let shelter=new AnimalShelter();

let animal1={type :'dog' , name:'me'};
let animal2={type :'dog' , name:'me2'};
let animal3={type :'dog' , name:'also me'};
let animal4={type :'cat' , name:'not me'};


shelter.enqueue(animal1);
shelter.enqueue(animal2);
shelter.enqueue(animal3);
shelter.enqueue(animal4);
shelter.dequeue(animal1);
shelter.dequeue(animal2);
shelter.dequeue(animal3);

shelter.dog.storage.forEach(i=>console.log(i));
console.log(shelter.dog.isEmpty());
shelter.cat.storage.forEach(i=>console.log(i));


module.exports={
   
    AnimalShelter
}

