var prompt = require('prompt-sync')();

let ages = []

console.log("Enter ages of 5 people");
for (let index = 0; index < 5; index++) {
    ages.push(prompt('enter: '))
}

console.log("18+ ages : ",ages.filter(v=>v>=18));