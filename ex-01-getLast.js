/**
 * Ex-01: getLast()
 *
 * Write a function called getLast() that returns the last element of an array.
 *
**/
//
// INPUT: array
// OUTPUT: last element of array

var getLast = function (stuffArr){
  var lastElement = stuffArr[stuffArr.length - 1]
  // console.log(lastElement);

  return lastElement
}

console.assert( getLast([1,8,4,3]) === 3 )
console.assert( getLast([1,8,4,3,5]) === 5 )
console.assert( getLast(['a','b','c','d','e','f']) === 'f' )
console.assert( getLast([true, false, false, true, false]) === false )
