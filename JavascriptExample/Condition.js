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
