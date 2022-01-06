//////////////////////////////MAP
//always create a new array
//map to transform element of array into something new


const array = [1, 2, 3];
//pasing anonymous function with argument number
const newArray = array.forEach(function (number) {
  return number * 2;
});

console.log(newArray); // <== undefined
//it returns undefined because foreach only iterates 

//if i use map i get a new array with new elements
const array = [1, 2, 3];

const newArray = array.map(function (number) {
  return number * 2;
});

console.log(newArray); // [ 2, 4, 6 ]


//same map used with ES6 map
const array = [1, 2, 3];

const newArray = array.map(number => number * 2);

console.log(newArray); // [ 2, 4, 6 ]


//same map with arrow function
const array = [1, 2, 3];

const newArray = array.map(number => number * 2);

console.log(newArray); // [ 2, 4, 6 ]


//if i want to achieve the smae result with foreach 
//i need to do this and create manually array, interate and then push each element

const array = [1, 2, 3];

const newArray = []; // we have to create a newArray
array.forEach(function (numcopy) {
  numcopy *= 2; // double the passed copy (it's a copy)
  newArray.push(numcopy); // and push it to the newArray
});

console.log(newArray); // <== [ 2, 4, 6 ]


//another expale, here i need to have a return

const newArray = [1, 2, 3].map(function (el) {
  el * 2; // Oops, I missed `return` (#britney #diditagain)
});

console.log(newArray); // [undefined, undefined, undefined]


//map practice exercises
const students = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];


//it is an array and it has map method
//passing theStudent as parameter
const finalGrades = students.map(theStudent => {
  //iterate student by student
  // do the calculation i need to do
  const projectsAvg = (theStudent.firstProject + theStudent.secondProject) / 2;
  const finalGrade = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
  //since it is a map i need to return
  return {
    //return object with 2 properties
    name: theStudent.name,
    finalGrade: Math.round(finalGrade)
  };
});

console.log(finalGrades);
// [
//   { name: 'Tony Parker', finalGrade: 85 },
//   { name: 'Marc Barchini', finalGrade: 69 },
//   { name: 'Claudia Lopez', finalGrade: 87 },
//   { name: 'Alvaro Briattore', finalGrade: 77 },
//   { name: 'Isabel Ortega', finalGrade: 75 },
//   { name: 'Francisco Martinez', finalGrade: 76 },
//   { name: 'Jorge Carrillo', finalGrade: 86 },
//   { name: 'Miguel López', finalGrade: 76 },
//   { name: 'Carolina Perez', finalGrade: 72 },
//   { name: 'Ruben Pardo', finalGrade: 71 }
//  ]

