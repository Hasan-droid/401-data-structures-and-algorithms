'use strict'

const repatedWord=require('../repatedWord');

describe("repated word hash table",()=>{
    
    it('success senario',()=>{
         
        let text1="Once upon a time, there was brave a princess who..."
        expect(repatedWord(text1)).toEqual('a')
    })
})