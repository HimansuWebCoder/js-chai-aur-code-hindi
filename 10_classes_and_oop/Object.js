// function---------------->
// Array------------------->   Object -----------> null
// String------------------>

// Everything is object inside javascript


function multiplyBy5(num){
	// this.num = num
	return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}


function createUser(username, score){
	// username = username // confused which is mine or not so use this
	this.username = username
	this.score = score
}


createUser.prototype.increment = function(){
	this.score++
}

createUser.prototype.printMe = function(){
	console.log(`score is ${this.score}`)
}

// this - jisne bhi bulaya hai uske paas jao (current context)
// createUser confused which chai increase price who call or which context
// const chai =  createUser("chai", 25)
// const tea =  createUser("tea", 250) // before new keyword not working 
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

// myArray.prototype.map() // isi terha likhte ho kya nahi

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
