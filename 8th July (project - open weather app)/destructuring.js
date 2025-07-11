// Array Destructuring 
const nums = [100, 200, 300, 400, 500]
let [a, b, c] = nums
console.log(a, b, c);

let [first] = nums
let arr = nums
arr.splice(0, 1)
console.log(first, arr);

[nums[1], nums[0]] = [nums[0], nums[1]]
console.log(nums);

// Object Destructuring
const user = { name:"Alice", age:30, email: "alice@example.com"};
let {name, age, email} = user
console.log(name,age, email);


const employee = {id:1, details : {designation:"manager", dept : "sales"}};
let {id,details} = employee
let {designation, dept} = details

console.log(id, details, designation, dept);


const article = {title:"news", desc:"breaking news"}
let {title: heading, desc: description} = article
console.log(heading, description);

const config = {layout:"list"}
let {theme="light", layout="grid"} = config
console.log(theme, layout);