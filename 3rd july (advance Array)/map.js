let arr = [1, 2, 3, 4]

let k = 97
let arr2 = arr.map((v)=>{
    let ob = {}
    ob[String.fromCharCode(k)] = v
    k++
    return ob
})

console.log(arr2);