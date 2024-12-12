// Get the user's age as input
// let age = parseInt(prompt("Enter your age:")); --Another Way

let age = 50;

// Declare the base ticket fare
let ticketFare = 800;

// Variable to store the final ticket fare
let finalFare;

// Check the conditions for fare calculation
if (age < 10) {
    finalFare = 0;  // Children under 10 get the ticket for free
} else if (age >= 60) {
    // finalFare = ticketFare * 0.85;  // Senior citizens get a 15% discount
    finalFare = ticketFare * 15 / 100;  // Senior citizens get a 15% discount
} else {
    // Ask if the person is a student
    let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

    if (isStudent === "yes") {
        // finalFare = ticketFare * 0.50;  // Students get a 50% discount
        finalFare = ticketFare * 50 / 100;  // Students get a 50% discount
    } else {
        finalFare = ticketFare;  // Regular ticket fare
    }
}

// Output the final fare
console.log("Your ticket fare is: " + finalFare + " Tk.");
