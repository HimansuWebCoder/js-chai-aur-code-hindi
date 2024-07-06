
// lexical scope
function init() {
	let name = "Mozilla";
	function displayName(){
		console.log(name);
	}

	displayName();
}

init(); // Mozilla

function outer(){
	let username = "Himansu"
	console.log(secret);
	function inner(){
		let secret = "my123"
		console.log("inner", username);
	}
	function innerTwo(){
		console.log("innerTwo", username);
		console.log(secret);
	}
	inner()
	innerTwo()
}

// outer() // Himansu
// console.log("TOO OUTER", username); // username is not defined


// closure
function makeFunc(){
	const name = "Mozilla";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

const myFunc = makeFunc();
myFunc(); // Mozilla