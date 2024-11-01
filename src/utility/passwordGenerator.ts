import * as utils from "./Consts";

 export const createPassword = (characters: string, passwordLength: number) : string => {
    console.log("Generating secured password !!!");
    let result = "";
    for(let i=0; i<passwordLength; i++) {
        const idx = Math.round(Math.random() * characters.length);
        result += characters.charAt(idx);
    }
    console.log(result);
    return result;
}


export const generatePasswordString = (passReq : utils.PasswordRequirement) : string => {
    let characters = '';
    if(passReq.includeUpper) 
        characters += utils.CHARACTERS_UPPERCASE;
    if(passReq.includeLower)
        characters += utils.CHARACTERS_LOWERCASE;
    if(passReq.includeNumber)
        characters += utils.CHARACTERS_NUMBERS;
    if(passReq.includeSymbol)
        characters += utils.CHARACTERS_SYMBOL;

    console.log("Characters: ", characters);
    
    const generatedPassword = createPassword(utils.CHARACTERS_UPPERCASE, passReq.length);

    return generatedPassword;
}
