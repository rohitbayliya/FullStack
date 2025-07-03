var prompt = require('prompt-sync')();
let correctUser = "admin";
let correctPass = "1234";
let u = prompt("Enter username: ");
let p = prompt("Enter password: ");
if (u === correctUser && p === correctPass) console.log("Login Successful");
else console.log("Login Failed");