var prompt = require('prompt-sync')();

let char = prompt('Enter a num1:')

if (char.length !== 1) {
  console.log("enter one character only");
} else {
  let code = char.charCodeAt(0);

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    console.log("alphabet");
  } else if (code >= 48 && code <= 57) {
    console.log("digit");
  } else {
    console.log("special character");
  }
}