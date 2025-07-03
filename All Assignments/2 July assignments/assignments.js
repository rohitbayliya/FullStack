// Assignment Title: Practice with Strings and Arrays in JavaScript

// Objective:
// Strengthen your understanding of JavaScript string and array operations through hands-on problem solving.

// Instructions:
// - Use only vanilla JavaScript.
// - Write functions for each question.
// - Do not use external libraries (e.g., lodash).
// - Submit a `.js` file with all your solutions, clearly commented.
var prompt = require('prompt-sync')();
// 🧠 STRING QUESTIONS (5)

// 1. **Reverse a String**  
//    Write a function `reverseString(str)` that takes a string and returns it reversed.  
//    Example: `"hello" → "olleh"`
function reverseString(str) {
   let a = str.split('')
   a.reverse()
   return a.join('')
}
// 2. **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`
function isPalindrome(str) {
   str.lowercase()
   let len = str.length
   for(let i = 0; i < len; i++){
      if(str.at(i) === str.at(len-i)){
         continue
      } else {
         return false
      }
   }
   return true
}
// 3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`
function capitalizeWords(str) {
  let a = str.split(' ')
  let a2 = []
  for(let word of a){
      a2.push(word[0].toUpperCase() + word.slice(1));
  }
  return a2.join(' ')
}

// 5. **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`
function charFrequency(str) {
   let freq = '{ '
   for (let char of str) {

   }
   return freq;
}

// 🧠 ARRAY QUESTIONS (5)

// 1. **Remove Duplicates**  
//    Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`
function removeDuplicates(arr) {
   let arr2 = []
   for (let i of arr) {
      if(!arr2.includes(i)){
         arr2.push(i)
      }
   }
   return arr2
}

// 2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`
function flattenArray(arr) {
  let arr2 = [];
  for (let i of arr) {
    arr2 = arr2.concat(i);
  }
  return arr2;
}

// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
  }
  console.log("{ max: ", max, ", min: ", min, " }");
}

// 4. **Sum of Even Numbers**  
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`
function sumEven(arr) {
   let sum = 0;
   for (let num of arr) {
      if (num % 2 === 0) sum += num;
   }
   return sum;
}
// 5. **Group by Type**  
//    Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`
function groupByType(arr) {
   let num = []
   let str = []
   let bool = []
   for (let item of arr) {
      let type = typeof item;
      if (type === "number") {
         num.push(item)
      } else if(type === "string"){
         str.push(item)
      } else if (type === "boolean") {
         bool.push(item)
      }
   }
   console.log("{ number: ", num , ", string: ", str, ", boolean: ", bool ," }");
}

let a = [1, 'a', true, 2, 'b']
groupByType(a)