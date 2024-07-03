// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null // 0
// let score = undefined 
// let score = true // 1
// let score = false // 0
let score = "Himansu" // NaN

// const {score} = req.body

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


// let isLoggedIn = 1
// let isLoggedIn = "" // false
let isLoggedIn = "Himansu" // true

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Himansu" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string


// ********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello"
let str2 = " Himansu"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log("1" + (2 + 2)); // 14
// console.log((2 + 2) + "1"); // 41 // confusing code navoid as much this type 

// console.log(3 + 4 * 5 % 3); // confusing code, instead use parenthess () don't just think like a question paper


// console.log(true);
// console.log(true+);
// console.log(+true); //1 confusion code , use simple code
// console.log(+""); // 0 confusing code don't write this like not prefer

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // not in consistency confusion code
// in coding code readability is must not super fancy

let gameCounter = 100
// gameCounter++; // pos-fix
++gameCounter; // pre-fix
console.log(gameCounter) // 101

// read this on mdn docs must assignment
// read ecmascript js site 
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
