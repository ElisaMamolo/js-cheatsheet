///////////////FILTER
//always create a new array
//verify that elements in array pass a certain condition

//ES5 syntax
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (number) {
  //only if condition is satisfied, add to the new array
  return number % 2 === 0;
});

console.log(evenNumbers); // <== [ 2, 4, 6 ]

//same with ES6
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // <== [ 2, 4, 6 ]

//exercise 1
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const ofDrinkingAge = people.filter(function (person) {
  return person.age >= 21;
});

console.log(ofDrinkingAge);
// [
//   { name: 'Candice', age: 25 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Nettie', age: 21 }
// ]

//exercise 2
const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

const poolFilter = place.filter(function (place) {
  return place.pool === true;
});
console.log(poolFilter);

//exercise 3
//filter not even numbers and greater than 42

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

const results = numbers.filter(function (number) {
  return number % 2 != 0 && number > 42; //get all odd numbers
});

console.log(result);
// [ 123, 99, 73, 45 ]
