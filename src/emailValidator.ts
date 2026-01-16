function validateEmail(email:string) : boolean{
    if (!email.includes('@')){
        return false;
    }
    return true;
}

export default validateEmail;