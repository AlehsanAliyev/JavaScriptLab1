// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    num_vowels = 0;
    str = str.toLowerCase();
    arr_vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        if(arr_vowels.includes(str[i])){
            num_vowels ++;
        }
        
    }
    return num_vowels;


}

module.exports = vowels;
