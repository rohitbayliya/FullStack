
// How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]

// Sort by name (alphabetical), then age (ascending)


let array = [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]

array.sort((a,b)=>{
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return a.age -b.age;
})

console.log(array);