// ------------------------------------------
// Day 21 — JavaScript Functions (Beginner → Real World)
// ------------------------------------------


// 1️⃣ BASIC FUNCTION
function greet() {
  console.log("Hello Developer! Welcome to Day 21 🚀");
}
greet();


// 2️⃣ FUNCTION WITH PARAMETERS
function sayHello(name) {
  console.log("Hello " + name + "! Great to see you learning JS.");
}
sayHello("Kashif");
sayHello("Ali");


// 3️⃣ FUNCTION WITH RETURN VALUE
function addNumbers(a, b) {
  return a + b;
}
let sum = addNumbers(10, 20);
console.log("Sum =", sum);


// 4️⃣ REAL-WORLD FUNCTION — DISCOUNT CALCULATOR
function calculateDiscount(price) {
  if (price >= 3000) {
    return price * 0.20; // 20% off
  } else if (price >= 1500) {
    return price * 0.10;
  } else {
    return 0;
  }
}
let discount = calculateDiscount(2800);
console.log("Discount:", discount);


// 5️⃣ LOGIN VALIDATION FUNCTION
function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Successful ✔";
  } else {
    return "Invalid Login ❌";
  }
}
console.log(login("admin", "1234"));
console.log(login("user", "0000"));


// 6️⃣ TAX CALCULATOR (REAL E-COMMERCE LOGIC)
function calculateTax(amount) {
  const taxRate = 0.17; // 17% sales tax
  return amount * taxRate;
}
console.log("Tax on 5000 =", calculateTax(5000));


// 7️⃣ FUNCTION FOR CHECKING AGE PERMISSION
function canDrive(age) {
  if (age >= 18) {
    return "You can drive 🚗";
  } else {
    return "You cannot drive ❌";
  }
}
console.log(canDrive(20));


// 8️⃣ ARROW FUNCTION (Modern JavaScript)
const multiply = (x, y) => x * y;
console.log("Multiply =", multiply(5, 6));


// 9️⃣ REAL-WORLD — SHIPPING FEE FUNCTION
const shippingFee = (location) => {
  if (location === "Pakistan") return 200;
  if (location === "USA") return 1500;
  return 500; // default
};
console.log("Shipping Fee =", shippingFee("Pakistan"));


// 🔟 SIMULATED API CALL FUNCTION
function fetchUser() {
  return {
    name: "Muhammad Kashif",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"],
  };
}
console.log(fetchUser());


// 1️⃣1️⃣ FUNCTION INSIDE FUNCTION (NESTED)
function createMessage(name) {
  function upper(text) {
    return text.toUpperCase();
  }
  return "WELCOME " + upper(name);
}
console.log(createMessage("kashif"));
