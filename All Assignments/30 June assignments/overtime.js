var prompt = require('prompt-sync')();
let hours = parseInt(prompt("Enter total hours worked: "));
let pay = hours > 40 ? (hours - 40) * 12 : 0;
console.log("Overtime Pay: Rs." + pay);