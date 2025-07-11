// What will be the output of the following?

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); 

// [ 1, 2, 3, 4 ]


// What will this code output and why?

const arr = [1, 2, 3];
arr.length = 0;
console.log(arr[0]); // undefined

// arr.length = 0
// this statement empties the array and when the element is accessed it says undefined


// What is the result of this?

const a1 = [1, 2, 3];
const b1 = a1.slice(0, 2);
b1[0] = 100;
console.log(a1); // [ 1, 2, 3 ]

// a1 is not altered