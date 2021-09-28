'use strict'

const repatedWord=require('../repatedWord');

describe("repated word hash table",()=>{
    
    it('1 word reoated',()=>{
         
        let text1="Taco cat ate a taco"
        expect(repatedWord(text1)).toEqual('taco')
    })

    it('3 words repated with same amount',()=>{
         
        let text1="No Try not Do or do not There is no try"
        expect(repatedWord(text1)).toEqual('no')
    })
})