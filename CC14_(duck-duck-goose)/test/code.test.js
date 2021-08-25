'use strict'

const lastStands = require('../code');

describe("test dock dock goose code", () => {
    var ducks = ["A", "B", "C", "D", "E"];
    var goose = 3;
    it("succesful implementaion", () => {
        const last = new lastStands();
        expect(last.lastStanding(ducks, goose)).toEqual('D');
    })

    it("numeric values implementaion", () => {
        let numeric=[1, 2, 3, 4, 5]
        const last = new lastStands();
        expect(last.lastStanding(numeric, goose)).toEqual(4);
    })

})