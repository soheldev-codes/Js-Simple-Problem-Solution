/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1.
if not, then the value of the variable result will be the sum of num1 and num2.


write a simple if-else. 

also, write it using ternary operator.

 */




// Declare the two numbers
let num1 = 10;  // Example value for num1
let num2 = 5;   // Example value for num2

// Declare the result variable
let result;

// Check if num1 is greater than num2
if (num1 > num2) {
    result = num1 * 2;  // If num1 is greater, result is double of num1
} else {
    result = num1 + num2;  // If num1 is not greater, result is the sum of num1 and num2
}

// Output the result
console.log(result);


// Declare the two numbers
let num3 = 10;  // Example value for num3
let num4 = 5;   // Example value for num4

// Use ternary operator to set the result
let result2 = (num1 > num2) ? (num1 * 2) : (num1 + num2);

// Output the result
console.log(result2);

