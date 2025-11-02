// ✅ Day 18 — JavaScript Operators & Expressions

console.log("---- Arithmetic Operators ----");

let a = 10;
let b = 3;

console.log("Addition:", a + b);      // 13
console.log("Subtraction:", a - b);   // 7
console.log("Multiplication:", a * b);// 30
console.log("Division:", a / b);      // 3.33
console.log("Modulus:", a % b);       // 1 (remainder)
console.log("Exponent:", a ** b);     // 1000


console.log("\n---- Assignment Operators ----");

let x = 5;
x += 2; // x = x + 2
console.log("x after x += 2:", x); // 7


console.log("\n---- Comparison Operators ----");

console.log(5 > 2);      // true
console.log(5 < 2);      // false
console.log(5 == "5");   // true (only value)
console.log(5 === "5");  // false (value + type)
console.log(5 != 3);     // true


console.log("\n---- Logical Operators ----");

let age = 20;

console.log(age > 18 && age < 30); // AND → true
console.log(age > 18 || age > 40); // OR → true
console.log(!(age > 18));          // NOT → false


console.log("\n---- String Operators ----");

let firstName = "Ali";
let lastName = " Khan";

console.log("Full Name:", firstName + lastName); // Ali Khan


// ✅ Mini real-world example
let marks = 85;
console.log("Passed?", marks >= 50 && marks <= 100); // true
