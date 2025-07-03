var prompt = require('prompt-sync')();
let a1 = parseInt(prompt("Enter side A: "));
let b1 = parseInt(prompt("Enter side B: "));
let c1 = parseInt(prompt("Enter side C: "));
if (a1 + b1 > c1 && a1 + c1 > b1 && b1 + c1 > a1) {
  if (a1 === b1 && b1 === c1) console.log("Equilateral");
  else if (a1 === b1 || b1 === c1 || a1 === c1) console.log("Isosceles");
  else console.log("Scalene");
} else console.log("Invalid Triangle");