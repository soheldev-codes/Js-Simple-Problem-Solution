/*
✅ Task - 1

Access the golden rod color value

👉 যেহেতু key-এর মধ্যে space আছে, তাই dot notation কাজ করবে না।
👉 Bracket notation ব্যবহার করতে হবে।
*/

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520"
};

console.log(colors["golden rod"]);


// ✅ Task-2
// Add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

car["passenger capacity"] = 5; // 📝 এখানে space থাকায় bracket notation ব্যবহার করা হয়েছে

console.log(car);




// ✅ Task-3
// Display the physics marks

const student1 = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30
  }
};
console.log(student1.physics.marks);


// ✅ Task-4
// Count the number of properties

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true
};

let count = Object.keys(student).length;

console.log(count);       // 📌 Output: 4



// ✅ Task-5 (Hard 🔥)

// Loop through an object and print key-value pairs with their types

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true
};

for (let key in myObject) {
  console.log(
    "key:", key, "| type:", typeof myObject[key]
  );
}

/*
📌 Output:

key: name | type: string
key: age | type: number
key: city | type: string
key: isStudent | type: boolean

*/