////////REDUCE

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
  console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  return accumulator + currentValue;
});

console.log('total is: ', total);
//table of expected runsteps and returned total
// accumulator is:  2 and current value is:  4
// accumulator is:  6 and current value is:  6
// accumulator is:  12 and current value is:  8
// total is:  20
