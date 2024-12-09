/***
 --Question-1

Free Drinks

    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


// Solution

let burgerPrice = 510;

// Check if the input is a valid number
if (isNaN(burgerPrice) || burgerPrice <= 0) {
    console.log('Please enter a valid burger price.');
} else {
    // Using only if-else statements to check the price and determine the result
    if (burgerPrice > 500) {
        console.log('Congratulations! You get a free Coke!');
    } else {
        console.log('Coke costs 30 Tk.');
    }
}