'use strict'
const valid=require('../code')
describe("test validate brackets code",()=>{

    it("happy path",()=>{
        
        let brackets="(([))]"
        const validate=new valid();
        expect(validate.validateBrackets(brackets)).toEqual(true);

    })

    it("handle the false input ",()=>{
        
        let brackets="(([[])]"
        const validate=new valid();
        expect(validate.validateBrackets(brackets)).toEqual(false);

    })

    it("handle sting input  ",()=>{
        
        let brackets="((erers[)sdsdsf)]"
        const validate=new valid();
        expect(validate.validateBrackets(brackets)).toEqual(true);

    })

    
})