// Get your score and your friend's score as input
let yourScore = 80
let friendScore = 60;

// Check your score first
if (yourScore > 80) {
    // If you get more than 80, check your friend's score
    if (friendScore > 80) {
        console.log("You and your friend both scored above 80! Go for lunch together!");
    } else if (friendScore >= 60) {
        console.log("Your friend scored below 80 but above 60. Tell them: 'Good luck next time!'");
    } else if (friendScore >= 40) {
        console.log("Your friend's score is between 40 and 60. Keep their message unseen.");
    } else {
        console.log("Your friend scored below 40. Block your friend.");
    }
} else {
    // If you get less than or equal to 80, go home and sleep, and act sad
    console.log("You scored below 80. Go home and sleep. Act sad.");
}
