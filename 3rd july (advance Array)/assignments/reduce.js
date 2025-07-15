// Explain what happens in this reduce expression:

let a = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0)

// acc means previous value and curr means current value, this line of code sums the elements of the array

console.log(a);