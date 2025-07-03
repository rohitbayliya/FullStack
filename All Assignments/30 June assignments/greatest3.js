var prompt = require('prompt-sync')();
let x = parseInt(prompt("Enter first number: "));
let y = parseInt(prompt("Enter second number: "));
let z = parseInt(prompt("Enter third number: "));
if (x > y && x > z) console.log(x);
else if (y > z) console.log(y);
else console.log(z);