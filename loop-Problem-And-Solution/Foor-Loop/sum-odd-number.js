/***

task-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

task-2:

Display sum of all the even numbers from 51 to 85.

 */



//  Sum All odd Number

let oddSum = 0;

for (let i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        oddSum += i;
        console.log(i)
    }

}
console.log(oddSum)



//  Sum All even Number

let evenSum = 0;

for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        evenSum += i;
        console.log(i)
    }

}
console.log(evenSum)