// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    my_char = '#';
    
    for (let i = 1; i < n + 1; i++) {
        output_str = '';
        for (let j = 0; j < i; j++) {
            output_str += my_char;      
            
        }
        for (let j = i; j < n; j++) {
            output_str += ' ';        
            
        }
        console.log(output_str);        
    }
}

steps(5);

module.exports = steps;
