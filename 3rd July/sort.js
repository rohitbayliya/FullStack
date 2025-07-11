let arr = [4, 2, 1,'d', 'h', 4, 5, 3, 'c', 'f', 'a', 'e']

console.log(arr);

let arr1 = arr.filter(v=> typeof v === "number")
let arr2 = arr.filter(v=> typeof v === "string")
arr1.sort();
arr2.sort();

console.log(arr1.concat(arr2));

