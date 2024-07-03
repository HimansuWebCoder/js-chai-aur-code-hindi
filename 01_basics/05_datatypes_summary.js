// Primitive Data Type

// 7 types : String, Number, Boolean, null, undefined, Symbol, , BigInt

// const score:number = 100 // javascript is a statically type language

const score = 100 // number type
const scoreValue = 100.3 

const isLoggedIn = false // boolean type
const outsideTemp = null // null type empty 
let userEmail = undefined; // undefined type 
// or 
// let userEmail; // undefined type

const id = Symbol("123"); // symbol data type
const anotherId = Symbol("123")

// console.log(id === anotherId); // false

const bigNumber = 2342342352523542342n // bigint data type


// Reference Data Type (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"] // reference type 

// {
// 	name: "himansu", // reference type
// 	age: 22,
// }

// or we can store this in a variable

// let myObj = {
// 	name: "himansu",
// 	age: 22,
// }



// function(){}  => function definition
const myFunction = function() {
	console.log("Hello Worlds")
}

// checking of any data type
console.log(typeof bigNumber) // bigint
console.log(typeof outsideTemp); // object
console.log(typeof id); // symbol
// typeof operator interview mein puchaa jaata hai

console.log(typeof myFunction);// function (call it object function)


// *****************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydot.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
	email: "user@google.com",
	upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);