if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }

[10 , 9, 8 , 7, 6, 5, 4, 3 ,2, 1]


("https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925/2")


//range of numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};

//rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
//rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
//rangeOfNumbers(4, 4) should return [4]
