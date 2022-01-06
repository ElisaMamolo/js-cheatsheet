///////////SORT
//.sort() method sorts the elements of an array in place and returns the array.

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();

console.log(numbers);
//sorted following "string Unicode code points"
// [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]


//this is what sort method does behind the scenes 
//uses the default compare function
function compare(a, b) {
    if (a < b) return -1; // a is less than b // b moved before a in the array
    if (a > b) return 1; // a is greater than b
    if (a === b) return 0; // a equals b
  }


  //we need to do this to use sort and have "correct" result
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
numbers.sort(function (a, b) {
  return a - b;
});

// ES6
numbers.sort((a, b) => a - b);

console.log(numbers);
// [ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]


//////////////REVERSE
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
// ES5
numbers.sort(function (a, b) {
  return b - a;
});

// ES6
numbers.sort((a, b) => b - a);

console.log(numbers);
// [ 223, 112, 99, 68, 64, 23, 22, 18, 9, 1, 0 ]


//ASCending reverse with strings
const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

words.sort();

console.log(words);
// ["A", "AA", "First", "Goodbye", "Hello", "Second", "Third", "a", "b"]

//DESCending
words.sort().reverse();

console.log(words);
// ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"]


/////////////////REVERSE
//Reverse method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const arr1 = ['one', 'two', 'three'];
const arr2 = arr1.reverse();

console.log(arr1); // ['three', 'two', 'one'] // --> original array is mutated
console.log(arr2); // ['three', 'two', 'one']
