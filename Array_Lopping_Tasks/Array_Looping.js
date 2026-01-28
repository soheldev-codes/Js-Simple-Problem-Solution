// ✅ Task 1: Reverse an array without using reverse()
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors);
// ['orange', 'yellow', 'green', 'blue', 'red']

// ✅ Task 2: Get even numbers from an array (using loop)
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
// [12, 98, 78, 46]

// ✅ Task 3: Concatenate array elements using for...of
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';

for (let name of names) {
  result += name;
}

console.log(result);
// 'TomTimTinTik'

// ✅ Task 4 (Hard): Reverse words of a sentence
const statement = 'I am a hard working person';
let words = statement.split(' ');
let reversedSentence = '';

for (let i = words.length - 1; i >= 0; i--) {
  reversedSentence += words[i] + ' ';
}

console.log(reversedSentence.trim());
// 'person working hard a am I'

// ✅ Task 5: Copy array so original is not affected
const original = [1, 2, 3];
const copy = [];

for (let i = 0; i < original.length; i++) {
  copy.push(original[i]);
}

copy[0] = 99;

console.log('Original:', original);
console.log('Copy:', copy);

// Original: [1, 2, 3]
// Copy: [99, 2, 3]

// ✅ Task 6: Print student name and marks
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for (let student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}

// John scored 85
// Alice scored 90

// ✅ Task 7: Update value in a 2D array
const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

arr[1][0] = 99;

console.log(arr);
/*
[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/