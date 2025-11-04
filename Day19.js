//✅ Basic Syntax of If Else Ladder

if (condition) {
  // code if true
} else if (another condition) {
  // code if second condition true
} else {
  // code if none true
}



// Run this in console to understand line-by-line 👇
// ✅ Day 19 — JavaScript Conditions (if, else-if, else)

// Example 1: Simple Age Check
let age = 20;

if (age >= 18) {
  console.log("✅ You are an adult.");
} else {
  console.log("❌ You are under 18.");
}


// Example 2: Login Status Check
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("👋 Welcome back!");
} else {
  console.log("🔒 Please login to continue.");
}


// Example 3: Grade System (Real-world school logic)
let marks = 78;

if (marks >= 90) {
  console.log("🎖 Excellent — Grade A+");
} else if (marks >= 80) {
  console.log("🥇 Very Good — Grade A");
} else if (marks >= 70) {
  console.log("✅ Good — Grade B");
} else if (marks >= 60) {
  console.log("🙂 Fair — Grade C");
} else {
  console.log("❌ Fail — Work harder next time!");
}


// Example 4: E-Commerce Discount
let cartTotal = 1200;

if (cartTotal > 1000) {
  console.log("💰 Congrats! You get a 10% discount");
} else {
  console.log("🛒 Add more items to get discount");
}


// Example 5: Weather Checker
let temperature = 30;

if (temperature > 35) {
  console.log("🥵 It's too hot!");
} else if (temperature < 10) {
  console.log("❄️ It's too cold!");
} else {
  console.log("😎 Weather is pleasant");
}
