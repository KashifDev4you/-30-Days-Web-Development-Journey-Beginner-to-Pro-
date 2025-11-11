// ✅ Day 20 — Real-World JavaScript Conditions


// 1️⃣ Login System
let username = "Ali";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("✅ Welcome back, " + username);
} else {
  console.log("🔒 Please login to continue");
}



// 2️⃣ E-Commerce Cart Discount
let cartTotal = 2500;

if (cartTotal >= 3000) {
  console.log("🎁 You get 20% discount");
} else if (cartTotal >= 1500) {
  console.log("💰 You get 10% discount");
} else {
  console.log("🛒 Add more items for discount");
}



// 3️⃣ Age-Based Access (Movie / Website)
let age = 16;

if (age >= 18) {
  console.log("🎬 Access granted — Adult Content Allowed");
} else {
  console.log("🚫 Access denied — Age restriction");
}



// 4️⃣ Role Permission (Admin / User)
let role = "admin";

if (role === "admin") {
  console.log("🛠 Admin Access — Manage System");
} else if (role === "user") {
  console.log("👤 User Dashboard Access");
} else {
  console.log("❌ Unknown role — No access");
}



// 5️⃣ Membership System
let membership = "gold";

if (membership === "gold") {
  console.log("⭐ Gold Member — Free Shipping + Priority Support");
} else if (membership === "silver") {
  console.log("🔸 Silver Member — Free Shipping");
} else {
  console.log("🙂 Guest — No extra benefits");
}



// 6️⃣ Banking Example — Withdraw Logic
let accountBalance = 5000;
let withdrawAmount = 3000;

if (withdrawAmount <= accountBalance) {
  console.log("✅ Withdrawal successful");
} else {
  console.log("❌ Not enough balance");
}



// 7️⃣ Weather Logic
let temperature = 8;

if (temperature < 10) {
  console.log("❄️ It's freezing, wear warm clothes");
} else if (temperature < 25) {
  console.log("😊 Pleasant weather outside");
} else {
  console.log("🥵 Very hot, stay hydrated");
}
