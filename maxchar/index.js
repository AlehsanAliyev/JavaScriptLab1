// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let myDict = {};

    for (let i = 0; i < str.length; i++) {
        if(str[i] in myDict){
            myDict[str[i]] ++;
        }
        else{
            myDict[str[i]] = 1;
        }        
    }

    maximum = 0;
    let max_char;

    for(let key in myDict){
        if(myDict[key] > maximum){
            maximum = myDict[key];
            max_char = key;
        }
    }
    return max_char;

}

module.exports = maxChar;
