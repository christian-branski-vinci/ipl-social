import validateEmail from "../src/emailValidator"

describe('email validator test', ()=>{
    describe('must conain "@" and be followed by a "."', ()=>{
        it('should reject because no @ in mail', ()=>{
            const mail = "mail"
            const result =validateEmail(mail);

            expect(result).toBe(false);
        })

        it('should reject because contains @', ()=>{
            const mail = "mail@";

            const result = validateEmail(mail);

            expect(result).toBe(false)
        })
        it('should accpet because contain @ and followed by .', ()=>{
            const mail = "mail@exemple.com";

            const result = validateEmail(mail);

            expect(result).toBe(true)
        })
    })
})