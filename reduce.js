////////REDUCE
//always create a new array

//.reduce() is a method that turns a list of values into one value.

//anonymous functions getting 2 param
//accumulator and current value
array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

//accumulator is an accumulated value of each call. In the first round, it’s assumed it’s the first value from the array unless we state differently (which we will see how).
//currentValue is the current element in each iteration that will be added to the accumulator.

//another example
const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
  console.log(
    "accumulator is: ",
    accumulator,
    "and current value is: ",
    currentValue
  );
  return accumulator + currentValue;
});

console.log("total is: ", total);
//table of expected runsteps and returned total
// accumulator is:  2 and current value is:  4
// accumulator is:  6 and current value is:  6
// accumulator is:  12 and current value is:  8
// total is:  20

//sum with initial value
const numbers = [12, 9, 1, 8];

const total = numbers.reduce((accumulator, currentValue) => {
  console.log(
    "accumulator is: ",
    accumulator,
    "and current value is: ",
    currentValue
  );
  return accumulator + currentValue;
}, 23); // <= notice the 23!!!

console.log("total is: ", total);

// accumulator is:  23 and current value is:  12
// accumulator is:  35 and current value is:  9
// accumulator is:  44 and current value is:  1
// accumulator is:  45 and current value is:  8
// total is:  53

//we can use also strings to concatenate
const words = ["This", "is", "one", "big", "string"];

// ES5:
const bigString = words.reduce(function (sum, word) {
  return sum + word;
});

// ES6:
const bigString = words.reduce((sum, word) => sum + word);

console.log(bigString); // <== Thisisonebigstring

//accumulator is usually the first element of the array
//objects and reduce

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

//let's get the person age
const ages = people.reduce(function (sum, person) {
  return sum + person.age;
}, 0); // initialValue to 0 -> this can be omitted
//initialValue is now 0 otherwise it would be the first element of the object

console.log(ages); // <== 142

//same result with foreach
const numbers = [1, 2, 3, 4];
let total = 0;

numbers.forEach(function (number) {
  total += number;
});

console.log(total);
// 10


  