const QSort=require('../quickSrt-algorthim');

describe("test inseration",()=>{

    it("success senario",()=>{

        const arr=[8,4,23,42,16,15];
        const output=[4 , 8 , 15 , 16 , 23 , 42];
        expect(QSort(arr ,0, arr.length-1)).toEqual(output)

    })
       
    
})