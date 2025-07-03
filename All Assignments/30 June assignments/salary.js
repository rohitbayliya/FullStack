var prompt = require('prompt-sync')();
let basic = parseFloat(prompt("Enter basic salary: "));
let hra = 0, da = 0;
if (basic < 10000) {
  hra = 0.2 * basic;
  da = 0.5 * basic;
} else {
  hra = 0.3 * basic;
  da = 0.8 * basic;
}
let net = basic + hra + da;
console.log("Net Salary: Rs." + net);