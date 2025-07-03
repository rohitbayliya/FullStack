/*
Q1. Differnce between str.charAt(2) and str[2]
charAt() is a method which is used to access a character at a specific position and handles the index correctly,
even if the index is out of bounds, it returns empty string in such cases.
str[] uses and array notation and it actually access the srting as an array like structure
faster but vulenerable to errors
*/

/*
Q2. str = 'hello world'
touppercase -> 'HELLO WORLD'
*/

/*
Q3. str = 'JavaScript'
tolowercase -> 'javascript'
*/

/**
 * Q4. str = ' learn js '
 * trim() -> 'learn js'
 */

/**
 * Q5. "abc".repeat(3) -> "abcabcabc"
 */

/**
 * Q6. str = 'hello world'
 * str.includes('lo', 3) -> true
 */

/**
 * Q7. check if a string starts with a specific substring?
 * .startswith('subsstring')
 */

/**
 * Q8. "hello".endswith('lo') -> true
 */

/**
 * Q9. first occurence of in 'banana' -> 1 index
 */

/**
 * Q10. indexOf() -> first occurence index of a charater
 * lastIndexOf() -> last occurence index of a character
 * 'banana' 'a' -> indexOf() -> 1, lastIndexOf() -> 5
 */

/**
 * Q11. str='frontend-backend' 
 * split('-') -> ["frontend", "backend"]
 */

/**
 * Q12. substring(2, 6) vs slice(2, 6)
 * both are used for same purpose
 * slice is new and supports negative indexing
 * substring() -> Returns the substring from the start index (inclusive) to the end index (exclusive)
 * slice() -> Returns the substring from the start index (inclusive) to the end index (exclusive),
 *          similar to substring(), but with support for negative values.
 */

/**
 * Q13. "abc".padStart(6, '*') -> "***abc"
 */

/**
 * Q14. replace "hello" with "hi" in "hello world"
 * "hello world".replace("hello", "hi")
 */

/**
 * Q15. to reverse a string 
 * str="hello"
 * let a = str.split('')
 * a.reverse() // reverses the array
 * let reverseStr = a.join('')
 */