

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let sum = 0;

let i = 81;

while (i <= 131) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
    i++
}

console.log(sum)



/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let sumEven = 0;

let nums = 206;

while (nums <= 311) {
    if (nums % 2 === 0) {
        sumEven = sumEven + nums;
    }
    nums++
}

console.log(sumEven)