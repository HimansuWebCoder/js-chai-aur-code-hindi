// let a = 10
// const b = 20
// var c = 30

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// scope

var c = 300  // global scope
let a = 300 

if (true) { // this is block scope
	let a = 10
	const b = 20
	// var c = 30
	// c = 30 // tab bhi problem ayegi so avoid var
	// console.log("INNER: ", a); // INNER: 10
}

// functional scope, if else scope, loop scope, individuals environments scope not reltaion with global scope inside block scope of any 



// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); // 30
// console.log(a); // 300



// core scope window and code environment (node) global scope different



// closure
function one() {
	const username = "himansu"

	function two() { // nested function
		const website = "youtube"
		console.log(username);
	}
	// console.log(website); // website is not defined and below function not execute because code run line by line

	// two()
}

// one()


if (true) {
	const username = "himansu"
	if (username === "himansu") {
		const website = " youtube"
		// console.log(username + website);
	}
	// console.log(website); // 1st error // website is not defined
}

// console.log(username); // 2nd error // username is not defined


// ********************************* interesting ********************************

// addone(5) 
console.log(addone(5)) 

function addone(num) {
	return num + 1
}

// addone(5) // return but not print

addTwo(5) // Cannot access "addTwo" before initialization (this is expression store hold in a variable)

// function expression
const addTwo = function(num) {
	return num + 2
}

// addTwo(5) // return but not print

