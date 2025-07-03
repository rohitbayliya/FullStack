var prompt = require('prompt-sync')();
// Arithmetic Operators are same except one that is '**' -> Exponential operator

// Assignment operators are also same

// Comparison or Relational operators are also same except one '===' -> strict check, which checks value and datatype both

// Logical operators are also same
// Falsy values : 0, ''(Empty string), false, undefined, null

console.log(5**2);

console.log(5=='5', 5==='5');

console.log(!5, !!5);

let c = prompt('enter number - ')
console.log(c, typeof c);
console.log('after parseInt');
let d = parseInt(c);
console.log(d, typeof d);



