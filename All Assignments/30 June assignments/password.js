var prompt = require('prompt-sync')();

let password = prompt("Enter a password: ");
let hasDigit = false, hasSpecial = false;
for (let i = 0; i < password.length; i++) {
  let ch = password[i];
  if (ch >= '0' && ch <= '9') hasDigit = true;
  else if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))) hasSpecial = true;
}
if (password.length >= 8 && hasDigit && hasSpecial)
  console.log("Strong Password");
else console.log("Weak Password");
