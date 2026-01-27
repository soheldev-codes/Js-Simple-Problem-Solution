/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let i = 61;

while (i <= 100) {
    // if (i % 2 !== 0) {
    //     console.log(i)
    // }
    // i++

    // Shortcut
    console.log(i)
    i=i+2
}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let nums = 78;

while (nums <= 98) {
    if (nums % 2 === 0) {
        console.log(nums)
    }
    nums++
}