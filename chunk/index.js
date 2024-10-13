// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let my_arr = [];
    let input_len = array.length;

    let big_part = Math.floor(input_len / size);
    let qaliq_part = input_len % size;

    for (let i = 0; i < big_part; i++) {
        my_arr = my_arr.concat([array.slice(i*size,(i+1)*size)]);        
    }
    
    if (qaliq_part > 0) {
        my_arr = my_arr.concat([array.slice(big_part*size,big_part*size + qaliq_part)])
        
    }        
    
    return my_arr;

}


module.exports = chunk;
