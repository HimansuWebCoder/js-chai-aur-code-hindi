// console.log("H");
// console.log("i");
// console.log("m");
// console.log("a");
// console.log("n");
// console.log("s");
// console.log("u");

function sayMyName() {
    console.log("H");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("u");
}

// sayMyName
// sayMyName()

function addTwoNumbers(number1, number2) { // => parameters when we make function definitions
	// console.log(number1 + number2)
    // console.log("Himansu") // print
    // let result = number1 + number2
    // return result
    // console.log("Himansu") // not print
    return number1 + number2
}

// addTwoNumbers() // Nan
// addTwoNumbers(3, 4) // 7 => arguments when we take value 
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3 not checking in this data types
// const result = addTwoNumbers(3, 5) // 8  

// console.log("Result: ", result) // undefined // not return inside functions console is different and return is different
// console.log("Result: ", result) // after return Result: 8



// function loginUserMessage(username) {
// 	if (username === undefined) {
// 		console.log("Please enter a username");
// 		return
// 	}
// 	return `${username} just logged in`

// }

// or 

function loginUserMessage(username = "sam") {
	if (!username) { 
		console.log("Please enter a username");
		return
	}
	return `${username} just logged in`

}

// loginUserMessage("Himansu") // this function return value but not print or store in a variable or in console
// console.log(loginUserMessage("Himansu")) // using console.log print this
// console.log(loginUserMessage("")) // just logged in
// console.log(loginUserMessage()) // undefined just logged in 
// console.log(loginUserMessage()) // Please enter a username undefined just logged in 
// console.log(loginUserMessage()) // Please enter a username
// console.log(loginUserMessage()) // sam just logged in (after default value in param)
// console.log(loginUserMessage("Himansu")) // Himansu just logged in (override)


function calculateCartPrice(val1, val2, ...num1) {
	return num1
}

// console.log(calculateCartPrice(200, 400, 500)); // 200 // before adding ... and val1 and val2
// console.log(calculateCartPrice(200, 400, 500)); // [200, 400, 500] // after only adding ...rest param
// console.log(calculateCartPrice(200, 400, 500)); [500] // after adding val1, val2


const user = {
	username: "Himansu",
	// price: 199
	prices: 199 // problem is when this changed price to prices
}

function handleObject(anyObject) {
	console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) // Username is Himansu and price is 199
// handleObject(user) // Username is Himansu and price is undefined  // show undefined if changed price to prices

handleObject({
	username: "sam",
	price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
	return getArray[1]
}

// console.log(returnSecondValue(myNewArray)) // 400
// console.log(returnSecondValue([200, 400, 500, 1000])) // 400