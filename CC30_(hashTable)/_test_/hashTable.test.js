const hashTable=require('../HashTable');

describe("hash Table",()=>{

    it("add an entry",()=>{

        const newTable=new hashTable(10);
         newTable.add('name','omar')
        expect(newTable.get('name')).toEqual('omar')
    })

    it("retrive entry",()=>{
        const newTable=new hashTable(10);
        newTable.add('name','omar')
       expect(newTable.get('name')).toEqual('omar') 
    })

    // it("get does not exsist",()=>{
    //     const newTable=new hashTable(10);
    //     expect(newTable.contains(3)).toEqual(false) 

    // })

    it("handle collison",()=>{
        const newTable=new hashTable(10);
        newTable.add('name','omar');
        newTable.add('name','hasan')
        expect(newTable.get('name')).toEqual("omar\nhasan") 

    })
    it("retrive the value that had collison",()=>{
        const newTable=new hashTable(10);
        newTable.add('name','omar');
        newTable.add('name','hasan')
        expect(newTable.get('name')).toEqual("omar\nhasan") 

    })
    it("hash a key to an in-range value",()=>{
        const newTable=new hashTable(10);
      
        expect(newTable.hash('name')).toEqual(3) 

    })
})