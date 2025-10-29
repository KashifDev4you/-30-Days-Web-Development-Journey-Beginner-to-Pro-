// 🚀 Day 17 — JavaScript Variables, Data Types & Console Practice

// ✅ Declaring variables
var name = "Ali";           // Old method (not recommended usually)
let age = 20;              // Modern variable (can change later)
const country = "Pakistan"; // Constant (can't change)

// ✅ Printing values in console
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// ✅ Data Types Examples

// String → text
let language = "JavaScript";
console.log("Language:", language);

// Number → integers & decimals
let marks = 95;
let price = 199.99;
console.log("Marks:", marks, "Price:", price);

// Boolean → true / false
let isStudent = true;
console.log("Is Student:", isStudent);

// Undefined → variable declared but no value
let futurePlan;
console.log("Future Plan:", futurePlan);

// Null → intentionally empty
let job = null;
console.log("Job:", job);

// Array → collection of data
let skills = ["HTML", "CSS", "JavaScript"];
console.log("Skills:", skills);

// Object → real-world structure
let user = {
  firstName: "Ali",
  lastName: "Khan",
  age: 20
};
console.log("User Data:", user);

// ✅ Changing variables
age = 21; // allowed (because we used let)
console.log("Updated Age:", age);

// ❌ country = "India"; // Error! const cannot be changed
