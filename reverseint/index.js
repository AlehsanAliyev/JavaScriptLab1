// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = 0;  
    let num = Math.abs(n); 

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);  
        num = Math.floor(num / 10);  
    }

    return n < 0 ? -reversed : reversed;  
}


module.exports = reverseInt;
