var prompt = require('prompt-sync')();
let month = parseInt(prompt("Enter month number (1-12): "));
if (month === 2) console.log("28 or 29 days");
else if (month==4 || month==6 || month==9 || month==11) console.log("30 days");
else if (month >= 1 && month <= 12) console.log("31 days");
else console.log("Invalid");