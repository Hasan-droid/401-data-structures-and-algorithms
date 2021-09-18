const inseartion=require('../inseration-algorthim');

describe("test inseration",()=>{

    it("success senario",()=>{

        const arr=[8,4,23,42,16,15];
        const output=[4 , 8 , 15 , 16 , 23 , 42];
        expect(inseartion(arr , arr.length)).toEqual(output)

    })
       
    
})