'use strict';
class lastStands{

 
lastStanding = function (ducks, goose) {
    var counter = 0;
    while (counter < goose) {
        console.log(ducks.shift());
        ducks.push(ducks.shift());
        counter++;
    }
    console.log("hey");
    if (ducks.length > 1) {
       console.log( ducks.pop());
    }
    return ducks.length === 1 ? ducks[0] : lastStanding(ducks, goose);
};


}

const last=new lastStands();
let ducks = ["A", "B", "C", "D", "E"];
let goose = 3;
console.log(last.lastStanding(ducks, goose));


module.exports=lastStands;