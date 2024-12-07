const studentName = `Syam`;
let studentAge = 23;
let studentAgeString = `24`;
let studentGrade = undefined;

// String
let courseName = `Javascript 101`;
// Float

//Boolean
let isPassing = true;
//Undefined
let nextCourse;
//Null
let certificateNumber = null;

let courseModules = [`Variables`, `Functions`, `Objects`, `Arrays`];

let students = {
  name: `Syam`,
  age: 23,
  grades: [85, 90, 95],
  contact: {
    email: `satriasyamm@gmail.com`,
    phone: `087802558582`,
  },
};

let saldo = 10000;
let uang = `10000`;

if (saldo == uang) {
  console.log(`Bener`);
} else {
  console.log(`Salah`);
}

console.log(students.name);
console.log(courseModules[3]);

console.log(studentAge + studentAgeString);
let namaUmur = `Nama : ${studentName} dengan Umur : ${studentAge}`;

console.log(namaUmur);

let homework = 90;
let midterm = 85;
let final = 80;

let score = 80.5;
let attendance = 80;
let hasPassingGrade = score >= 60;
let hasAttendance = true;

let willPass = hasPassingGrade && hasAttendance;

let needsHelp = score < 60 || attendance < 80;

let isFailing = !hasPassingGrade;

console.log(`This student ${willPass ? "Passed" : "Failed"}`);
console.log(`This student ${needsHelp ? "Need Helps" : "Doesn't Need Helps"}`);
console.log(`This student ${isFailing ? "Failed" : "Pass the Passing Grade"}`);

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

//Basic If Statement

let studentScore = 85;
if (studentScore >= 80) {
  console.log("Excellent work!");
}
// 2. If-else statement
let age = 17;
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Too young to vote");
}
// 3. If-else if-else statement
let grade = 75;
if (grade >= 90) {
  console.log("Grade: A");
} else if (grade >= 80) {
  console.log("Grade: B");
} else if (grade >= 70) {
  console.log("Grade: C");
} else if (grade >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// 4. Nested if statements
let isLoggedIn = true;
let isAdmin = true;
let hasPermission = true;
if (isLoggedIn) {
  if (isAdmin) {
    if (hasPermission) {
      console.log("Welcome to admin dashboard!");
    } else {
      console.log("Insufficient permissions");
    }
  } else {
    console.log("Welcome to user dashboard!");
  }
}
console.log("Please log in first");
// 5. Using logical operators with if statements
let username = "john_doe";
let password = "secret123";
if (username === "john_doe" && password === "secret123") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}
// 6. Ternary operator (shorthand if-else)
let isSubscribed = true;
let message = isSubscribed ? "Welcome back!" : "Please subscribe";
