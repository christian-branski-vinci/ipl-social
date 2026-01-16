import validateEmail from "../src/emailValidator"

describe('email validator test', ()=>{
    describe('must conain "@', ()=>{
        it('should reject because no @ in mail', ()=>{
            const mail = "mail"
            const result =validateEmail(mail);

            expect(result).toBe(false);
        })

        it('should accept because contains @', ()=>{
            const mail = "mail@";

            const result = validateEmail(mail);

            expect(result).toBe(true)
        })
    })
})