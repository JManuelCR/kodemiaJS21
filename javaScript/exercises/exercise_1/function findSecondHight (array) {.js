 function secondMax () { 
    let arr = [20, 120, 111, 215, 54, 78]; // use int arrays
    let max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};

let secondMaxValue = secondMax()
console.log(secondMaxValue)


const array = ['20','120','111','215','54','78'];
findSecondHight(array)


function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of arr) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) {
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  
  const arr = ['20','120','111','215','54','78'];
  console.log(nextBiggest(arr));