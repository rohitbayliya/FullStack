var prompt = require('prompt-sync')();
let temp = parseInt(prompt("Enter temperature: "));
if (temp > 30) console.log("Hot");
else if (temp >= 15) console.log("Moderate");
else console.log("Cold");