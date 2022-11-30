/**
 * Create a filter funtion thet accept an array and a callback than:
 * For each array element run the callback given it the actual element
 * as an argument. If callback returns true, add the element to a new array
 * Return the array at the end with filter elements
 * 
 * const numeros = [10, 2, 3, 40, 33, 50]
 * const pares = x => {
 *     return x % 2 === 0
 * }
 * filter(numeros, pares) // [10,2 40, 50]
 * 
 */
const numbers = [10, 2, 3, 40, 33, 50]
const nullRemainder = ( x ) => x % 2;

function filterArray( array, callback ){
    let newArray = [];
    let j = 0;
    for(let i = 0; i < array.length; i++){
        checkValue = callback(array[i]);
        if ( checkValue === 0 ){
            newArray [j] = array[i];
            j ++;
        } 
    }
    
    return newArray;
}


console.log( filterArray( numbers, nullRemainder ))
