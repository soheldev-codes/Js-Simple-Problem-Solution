/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns
 their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// Get the student's score as input
let score = 90;

// Check if the score is valid

if (isNaN(score) || score < 0 || score > 100) {
    console.log("Please enter a valid score between 0 and 100.");

} else {

    // Determine the grade based on the score using if-else

    let gradePoint; // Variable to store the grade point

    if (score >= 90 && score <= 100) {
        gradePoint = 'A';
    } else if (score >= 80 && score < 90) {
        gradePoint = 'B';
    } else if (score >= 70 && score < 80) {
        gradePoint = 'C';
    } else if (score >= 60 && score < 70) {
        gradePoint = 'D';
    } else {
        gradePoint = 'F';
    }

    // Console Show the grade Number
    console.log("The student's grade is: " + gradePoint);
}