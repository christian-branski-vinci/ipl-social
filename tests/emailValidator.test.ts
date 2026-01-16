import validateEmail from "../src/emailValidator"

describe('email validator test', ()=>{
    describe('must conain "@" and be followed by a "." and no space', ()=>{
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
        it('should be false because space in mail', ()=>{
            const mail = "mail@ exemple.com";

            const result = validateEmail(mail);

            expect(result).toBe(false)
        })
        it('shoudl fail because no text befor @',()=>{
            const mail = '@exemple.com'

            const result = validateEmail(mail);

            expect(result).toBe(false)
        })
         it('shoudl fail because no text after @',()=>{
            const mail = 'mail@'

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