// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    my_char = '#';
    center =n -1 ;
    
    for (let i = 0; i < n; i++) {
        my_str = '';
        for (let j = 0; j < 2*n -1; j++) {
            if(j >= center - i && j <= center + i){
                my_str += my_char;
            }
            else{
                my_str += ' ';
            }
            
        }
        console.log(my_str);
                
        
    }
}



module.exports = pyramid;
