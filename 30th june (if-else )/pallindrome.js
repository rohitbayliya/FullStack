var prompt = require('prompt-sync')();
let num23 = parseInt(prompt("Enter a number: "));
let original = num23, reverse = 0;
while (num23 > 0) {
  reverse = reverse * 10 + (num23 % 10);
  num23 = Math.floor(num23 / 10);
}
console.log(original === reverse ? "Palindrome" : "Not Palindrome");
