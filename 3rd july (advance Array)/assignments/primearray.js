function isPrime(num) {  
    if(num < 2) {
        return false
    }
    let halfOfNum = parseInt(num/2)
    for (index = 2; index < halfOfNum; index++) {
        if (num%index==0) {
            return false
        }
    }
    return true
}

function primeArray(array) {
    let primeArr = []
    for (let index = 0; index < array.length; index++) {
        if(isPrime(array[index])) primeArr.push(array[index]);
    }
    return primeArr
}

let array = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11]
console.log(primeArray(array));