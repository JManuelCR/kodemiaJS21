/**
 * Create a map function that receives a callback and array to:
 * 
 * For each array element execute a callback giving that element  as an argument
 * 
 * obtain the result
 * 
 * add it to new array
 * 
 * return the final array with the result for each callbacks  calls
 * 
 * Example
 *   const numeros = [1, 2, 3]
const duplicar = (x) => {
     return x * 2
}
map(numeros, duplicar) // [2, 4, 6]
 *  
 */


const array = [2, 5, 3, 4];
const double = (x) => x * 2;


function mapArray(array,  callback){
    let newArray = [];
    for(i = 0; i < array.length;  i++ ) {
        newArray [i]= callback(array[i]);        
    }
    console.log(newArray);
    return;
}

mapArray(array, double);

        