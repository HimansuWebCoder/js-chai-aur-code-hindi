const user = {
	username: "Himansu",
	price: 999,

	welcomeMessage: function() {
		console.log(`${this.username} , welcome to website`);
		// console.log(this); // current context
	}

}

// user.welcomeMessage
// user.welcomeMessage() // current context value that have there 1st current context
// user.username = "sam" // context changed value // changed 2nd context
// user.welcomeMessage()

// console.log(this); // {} (in node environment) see in browser console (window)
// global object = window object in browser
// in node = this is empty object {}


// function chai() {
// 	let username = "himansu"
// 	console.log(this);
// 	console.log(this.username); // undefined
// }

// chai()


// const chai = function () {
// 	let username = "himansu"
// 	console.log(this.username); // undefined
// }

// chai()

// arrow function
const chai = () => {
	let username = "himansu"
	// console.log(this.username); // undefined
	console.log(this); // {}
}

// chai()



// () => {} arrow function
// const addTwo = () => {} // also store in a variable
// const addTwo = (num1, num2) => {
// 	return num1 + num2
// }

// addTwo(); // return not print
// console.log(addTwo(3, 4)) // 7 // print


// implicit return one line statement
// explicit return when use return keyword
// const addTwo = (num1, num2) => num1 + num2 
// const addTwo = (num1, num2) => ( num1 + num2 ) // if written within curly braces then must write return otherwise not 
// console.log(addTwo(3, 4)); // 7

const addTwo = (num1, num2) => ({username: "himansu"}) // not return like this so use wrap usign ()

console.log(addTwo(3, 4)); 

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
// myArray.forEach(function () {})
// myArray.forEach(function () => {})
// myArray.forEach(function () => ())