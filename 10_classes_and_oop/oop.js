// Object Literal

const user = {
	username: "himansu",
	loginCount: 8,
	signedIn: true,

	getUserDetails: function(){
		// console.log("Got user details from database");
		// console.log(`Username: ${username}`) // username is not defined
		// console.log(`Username: ${this.username}`) // himansu
		console.log(this); // it show current context means full objects
	}
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) // {} (node), Window (browser),  much context show window object show


// constructor function
// const promiseOne = new Promise()
// const date = new Date()
// ek hee objects se  multiple  instances bana sakte hain



function User(username, loginCount, isLoggedIn) {
	this.username = username;
	this.loginCount = loginCount;
	this.isLoggedIn = isLoggedIn
    
    this.greeting = function() {
    	console.log(`welcome ${this.username}`)
    }
	return this
}

// const userOne = User("himansu", 12, true)
// const userTwo = User("ChaiAurCode", 11, false) // this overwrite the above oh! problem

// so

// construction function use new
// called instances when use new keyword
const userOne = new User("himansu", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor); // User constructor [Function: User]

