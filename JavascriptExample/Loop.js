// 1. FOR LOOP
// Basic for loop
console.log("--- Basic for loop ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Loop through array
const fruits = ["apple", "banana", "orange", "mango"];

console.log("-- Looping through array ---");
for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits ${i + 1}: ${fruits[i]}`);
}
// 2. FOR... OF LOOP
// Easier way to loop through arrays
console.log("--- for...of loop ---");
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(`color: ${color}`);
}
// 3. FOR...IN LOOP
// Used for objects
console.log("--- for...in Loop---");
const student = { name: "John", age: 20, grade: "A" };

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
// 4. WHILE LOOP
// Runs while condition is true
console.log("--- while loop ---");
let count = 1;
while (count <= 5) {
  console.log(`While count: ${count}`);
  count++;
}
// 5. DO... WHILE LOOP
// Always runs at least once
console.log("--- do... while loop ---");
let num = 1;
do {
  console.log(`Number: ${num} `);
  num++;
} while (num <= 3);

// 6. BREAK AND CONTINUE
console.log("--- break and continue ---");
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(`Number ${i}`);
}
