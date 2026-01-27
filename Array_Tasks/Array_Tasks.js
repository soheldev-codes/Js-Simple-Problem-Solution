let fruits = ["apple", "Banana", "Orange", "Jackfot", "Mango"]

console.log(fruits[3]); //Jackfot

fruits[2] = "Jambura"

console.log(fruits)

// [ 'apple', 'Banana', 'Jambura', 'Jackfot', 'Mango' ]


// -------02--------

let toristSpot = ["Cox-Bazar", "Rangamati", "Sundorbon"]

toristSpot.push("Shajek")
toristSpot.push("Maldivs", "Nepal")
toristSpot.pop()

console.log(toristSpot)
// [ 'Cox-Bazar', 'Rangamati', 'Sundorbon', 'Shajek', 'Maldivs' ]

// ------03------

const myArrayBook = [
  'python book',
  'javascript book',
  'html book',
  'css book'
];

const searchTerm = 'javascript book';

if (myArrayBook.includes(searchTerm)) {
  console.log('The array contains a javascript book.');
} else {
  console.log('The array does not contain a javascript book.');
}

// Output: The array contains a javascript book.


// ------04--------

// 1. Creating different variables
const fruits = ["Apple", "Banana", "Cherry"];
const age = 25;
const name = { name: "Alex", role: "Developer" };
const numbers = [85, 92, 78, 100];
const greeting = "Hello World";
const emptyList = [];

// Store variables in an object to iterate through them easily
const variablesToTest = {
  fruits,
  age,
  name,
  scores,
  greeting,
  emptyList
};

// 2. & 3. Use Array.isArray() and print the message
console.log("--- Array Check Results ---");

for (let key in variablesToTest) {
  const value = variablesToTest[key];
  
  if (Array.isArray(value)) {
    console.log(`✅ The variable '${key}' IS an array.`);
  } else {
    console.log(`❌ The variable '${key}' is NOT an array (it is a ${typeof value}).`);
  }
}


// Try Function


// function checkArray(variable, variableName) {
//   if (Array.isArray(variable)) {
//     console.log(variableName + " is an array ✅");
//   } else {
//     console.log(variableName + " is NOT an array ❌");
//   }
// }

// checkArray(numbers, "numbers");
// checkArray(name, "name");
// checkArray(fruits, "fruits");
// checkArray(age, "age");



// -------05--------

// Step 1: Create two arrays

let foods = ["Apple", "Banana", "Mango"];
let vegetables = ["Potato", "Tomato", "Carrot"];

// Step 2: Combine arrays using concat

let combinedArray = foods.concat(vegetables);

// Step 3: Print all arrays

console.log("Fruits Array:", foods);
console.log("Vegetables Array:", vegetables);
console.log("Combined Array:", combinedArray);
