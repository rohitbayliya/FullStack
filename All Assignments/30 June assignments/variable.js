// Using 'let' to create variables
// Can also use 'var' and 'const'
// let a = 5; (Semicolon are optional)

// console.log() is used to print on console
// typeof is used to find the type

// Type of variables

// 1. number
let a = 50
console.log(a,typeof a)

// 2. string
let b = 'javascript'
console.log(b, typeof b);

let c = true;
console.log(c, typeof c);

let g
console.log(typeof g)

let n = null;
console.log(n, typeof n)

let i = 93239428n
console.log(i, typeof i);

let s1 = Symbol('a')
let s2 = Symbol('a')
console.log(s1 == s2, typeof s1);


let person = {
    name : 'rohit',
    age : 50
}

console.log(person.name);
console.log(person.age);
