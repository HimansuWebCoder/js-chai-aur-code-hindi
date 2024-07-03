const score = 400
// console.log(score) // 400

const balance = new Number(100)
// console.log(balance) // [Number: 100] and in console Number {100}


// console.log(balance.toString()) // 100

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0
// console.log(balance.toFixed(2)); // 100.00


// const otherNumber = 23.8966
const otherNumber = 123.8966
// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3)); // 23.9


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000 (USA)
// console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 (IND)
// Number. this show much methods of number in console show try it out


// *************************** Maths *********************************************

console.log(Math); // Object [Math] {} (node), but try in console browser more details prop

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.2)); // 4 low value take 
// console.log(Math.floor(4.9)); // 4 low value take 
// console.log(Math.min(4,3,6,8)); 
// console.log(Math.max(4,3,6,8));  


console.log(Math.random());
console.log(Math.random() * 10); // also include 0 , 0-9
console.log((Math.random()*10) + 1); // not include 0 , 1-10
console.log(Math.floor(Math.random()*10) + 1); // not include 0 , 1-10


const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max-min + 1)) + min);




