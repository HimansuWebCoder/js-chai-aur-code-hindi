// singleton
// Object.create

// object literals
// const jsUser = {} // empty object

const mySym = Symbol("key1")

const JsUser = {  // Key: value pair
	name: "himansu",
	"full name": "Himansu Naik",
	// mySym: "mykey1", // treat as a string
	[mySym]: "mykey1",
	age: 22,
	location: "Jaipur",
	email: "himansu@google.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)// string not a symbol interview question
// console.log(JsUser[mySym]) // not ["mySym"] 
// console.log(typeof JsUser[mySym]) // string // value mein kuch pharak nahi pada hai but how to use Symbol within object. (interview Q)




JsUser.email = "Himansu@chatgpt.com"
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "Himansu@microsoft.com"
// console.log(JsUser) // not changed because object is freeze
// also notice that in objcet [mySum] is [Symbol(key1)]: "mykey1" like this I am a symbol key huin


JsUser.greeting = function() {
	console.log("Hello JS user");
}

JsUser.greeting2 = function() {
	console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting2()); 







