function validateEmail(email:string) : boolean{
    if (!email.includes('@')){
        return false;
    }

    const index = email.indexOf('@');
    const partie= email.substring(index+1);
    if(index===0){
        return false
    }

    if (!partie.includes('.')){
        return false;
    }

    if (email.endsWith('.')){
        return false;
    }

    if(email.includes(' ')){
        return false;
    }
    return true;
}

export default validateEmail;