// 🧠 Problem 1: Array এর সব number print (for...of)

let nums = [1, 2, 3, 4, 5];

for (let n of nums) {
  console.log(n);
}


// 🧠 Problem 2: Array এর sum বের করো

let marks = [10, 20, 30];
let sum = 0;

for (let m of marks) {
  sum += m;
}

console.log("Sum:", sum);

// 🧠 Problem 3: Object থেকে শুধু keys print করো

let user = {
  id: 1,
  name: "Sohel",
  active: true
};

for (let key in user) {
  console.log(key);
}


// 🧠 Problem 4: Object থেকে শুধু values print করো

for (let key in user) {
  console.log(user[key]);
}
