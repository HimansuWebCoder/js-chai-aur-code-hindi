// if

// if (condition) {

// }

// if (true) {
     // all code execute
// }

// if (false) {
     //not execute code
// }


const isUserloggedIn = true  // = assignment operator assign the value true
const temperature = 41

// if (isUserloggedIn) {

// }

// if (2 === "2") {
//   console.log("executed");
// }

// if (2 != 3 ) {
//   console.log("executed");
// }


// if (temperature < 50) {
// 	console.log("less than 50");
// }

// if (temperature === 41) {
// 	console.log("less than 50");
// }

// if (temperature === 40) {
// 	console.log("less than 50");
// } else {
// 	console.log("temperature is greater than 50");
// }
// console.log("execute");


// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
// 	// const power =  "fly"
// 	var power = "fly"
// 	console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // power is not defined scope ka khel hai bhai
// console.log(`User power: ${power}`) // User power: fley (using var) not use var global scope


const balance = 1000

// if (balance > 500) console.log("test"); // implicit scope one line execute
// if (balance > 500) console.log("test"),
// console.log("test2"); // imature code and not code readibility

// if (balance > 500) console.log("test"),console.log("test2"); // imature code

// if (balance < 500) {
//     console.log("less than")
// } else if(balance < 750) {
// 	console.log("less than 750");
// } else if (balance < 900) {
// 	console.log("less than 900");
// } else {
// 	console.log("less than 1200");
// }


const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
	console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
	console.log("User logged in");
}