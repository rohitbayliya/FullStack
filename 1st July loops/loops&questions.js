var prompt = require('prompt-sync')();

let index = 0

console.log('q1 - numbers in ascending orer with for loop');
for (index = 1; index <= 10; index++) {
    console.log(index);
}

console.log('q2 - numbers in descending order with while loop');
while (index > 0) {
    console.log(index);
    index--;
}

console.log('q3 - even numbers using for loop');
for (index = 1; index <= 20; index++) {
    if (index%2 == 0) {
        console.log(index);
    }    
}

console.log('q4 - odd numbers using for loop');
for (index = 1; index <= 30; index++) {
    if (index%2 != 0) {
        console.log(index);
    }    
}

console.log('q5 - numbers divisivble by 5');
for (index = 1; index <= 50; index++) {
    if (index%5 == 0) {
        console.log(index);
    }    
}

console.log();
console.log('Sum, Product and Math Logic');
console.log();

console.log('q6 - sum of numbers till 100');
let sum = 0;
for (index = 1; index <= 100; index++) {
    sum += index;
}
console.log(sum);


console.log('q7 - multiplication of numbers till 10');
let mul = 1;
for (index = 1; index <= 10; index++) {
    mul *= index    
}
console.log(mul);


console.log('q8 - table of 7');
for (index = 1; index <= 10; index++) {
    console.log(7*index);    
}


console.log('q9 - counting number divisible by 3');
let count = 0
for (index = 1; index <= 50; index++) {
    if (index%3 == 0) {
        count++
    }    
}
console.log(count);

console.log('q10 - factorial');
mul = 1;
for (index = 1; index <= 5; index++) {
    mul *= index    
}
console.log(mul)


console.log('q11 - numbers except 4');
for (index = 1; index <= 20; index++) {
    if (index%4==0) {
        continue
    } 
    console.log(index);
}

console.log('q12 - number till 13');
for (index = 1; index <= 20; index++) {
    console.log(index);
    if (index==13) {
        break
    } 
}

console.log('q13 - prime number check');
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


console.log('q14 - square numbers');
for (index = 1; index <= 10; index++) {
    console.log(index**2); 
}

console.log('q15 - Triagnle pattern');
for (index = 1; index <= 3; index++) {
    let str = ''
    for (let j = 1; j <= index; j++) {
        str+='#'
    } 
    console.log(str);
    str = ''
}

console.log();
console.log('Conditionals inside loops');
console.log();

console.log('q16 - number without 3 multiples');
for (index = 1; index <= 100; index++) {
    if (index%3==0) {
        continue
    }
    console.log(index);
}

console.log('q17 - numbers until 7');
for ( index = 1; index < 10; index++) {
    console.log(index);
    if (index == 7) {
        break
    }
}

console.log('q18 - reverse a number');
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