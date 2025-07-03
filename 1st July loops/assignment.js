let index = 0

// 🔁 1. Loop Basics

// Print numbers from 1 to 10 using a for loop.
for (index = 1; index <= 10; index++) {
    console.log(index);
}
// Print numbers from 10 down to 1 using a while loop.
while (index > 0) {
    console.log(index);
    index--;
}
// Print numbers from 1 to 5 using a do...while loop.
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// ➕ 3. Summation & Product
// Find the sum of numbers from 1 to 100.
let sum = 0;
for (index = 1; index <= 100; index++) {
    sum += index;
}
console.log(sum);

// Find the product of numbers from 1 to 10.
let mul = 1;
for (index = 1; index <= 10; index++) {
    mul *= index    
}
console.log(mul);

// Find the sum of all even numbers between 1 and 50.
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
  evenSum += i;
}
console.log("Sum of even 1 to 50:", evenSum);

// Find the sum of squares of numbers from 1 to 10.
// (i.e., 1² + 2² + ... + 10²)
for (index = 1; index <= 10; index++) {
    console.log(index**2); 
}

// 🧠 4. Conditionals Inside Loops
// Print numbers from 1 to 20, skip multiples of 4 using continue.
for (index = 1; index <= 20; index++) {
    if (index%4==0) {
        continue
    }
    console.log(index);
}

// Print numbers from 1 to 10, stop at 7 using break.
for ( index = 1; index < 10; index++) {
    console.log(index);
    if (index == 7) {
        break
    }
}

// Count how many numbers between 1 and 100 are divisible by both 3 and 5.
let count = 0
for (index = 1; index <= 50; index++) {
    if (index%3 == 0 || index%5 == 0) {
        count++
    }    
}
console.log(count);

// 🔂 5. Nested Loops (Without Patterns)
// Print all pairs (i, j) where i and j go from 1 to 3.
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
// Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) {
      console.log(a, b);
    }
  }
}
// 🧮 6. Logic-Based Tasks
// Check if a given number is a prime number using a loop.
console.log('number - 20');
let number = 7  
for (index = 2; index < number; index++) {
    if (number%index==0) {
        console.log('divisible by '+ index);
        console.log("number is not prime");
        break
    } 
    if(index == number-1) {
        console.log('number is prime');
    }
}
// Print the factorial of a number (e.g., 6! = 720).
mul = 1;
for (index = 1; index <= 6; index++) {
    mul *= index    
}
console.log(mul)

// Print the reverse of a number using a loop (e.g., 123 → 321).
let num = 123456
console.log('current number - 123456');
let revnum = 0
while (num > 0) {
    revnum += num % 10
    num = parseInt(num/10)
    revnum *= 10
}
revnum /= 10
console.log(revnum);

// Count the number of digits in a given number using a loop.
let num2 = 9876543;
let digitCount = 0;
while (num2 !== 0) {
  digitCount++;
  num2 = parseInt(num2 / 10);
}
console.log("Number of digits:", digitCount);

// Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.
let num3 = 1331;
let original = num3;
let reverse = 0;
while (num3 !== 0) {
  let digit = num3 % 10;
  reverse = reverse * 10 + digit;
  num3 = parseInt(num3 / 10);
}
if(original === reverse){
    console.log(`number is palindrome`);
} else {
    console.log('number is not pallindrome');
}