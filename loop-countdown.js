if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }

[10 , 9, 8 , 7, 6, 5, 4, 3 ,2, 1]


("https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925/2")
