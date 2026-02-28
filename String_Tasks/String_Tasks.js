// ✅ Task-1

// Count how many times a string has the letter a

let str1 = "javascript is amazing";
let count1 = 0;

for (let ch of str1) {
  if (ch === "a") {
    count1++;
  }
}

console.log(count1);
// 🔹 This checks only lowercase a.



// ✅ Task-2

// Count how many times a string has the letter a or A

let str3 = "JavaScript Is Amazing";
let count3 = 0;

for (let ch of str3) {
  if (ch === "a" || ch === "A") {
    count3++;
  }
}

console.log(count3);


// 💡 Alternative (smart way):

let str2 = "JavaScript Is Amazing";
let count2 = 0;

for (let ch of str2.toLowerCase()) {
  if (ch === "a") {
    count2++;
  }
}

console.log(count2);


// ✅ Task-3

// Check whether a string contains all the vowels a, e, i, o, u

let str4 = "Education".toLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
let hasAllVowels = true;

for (let v of vowels) {
  if (!str4.includes(v)) {
    hasAllVowels = false;
    break;
  }
}

console.log(hasAllVowels);


// ✔️ Output will be true or false.


// ✅ Task-4

// Replace x with y and X with Y

let str5 = "xX is very useful";

str5 = str5.replace(/x/g, "y").replace(/X/g, "Y");

console.log(str5);


// 📝 Explanation:

/*
/x/g → replace all lowercase //x

/X/g → replace all uppercase X

*/


// ✅ Task-5

// Capitalize every first letter of each word

let str = "i am learning javascript";

let words = str.split(" ");
let result = [];

for (let word of words) {
  let capitalized =
    word.charAt(0).toUpperCase() + word.slice(1);
  result.push(capitalized);
}

console.log(result.join(" "));


// 📌 Output:

// I Am Learning Javascript