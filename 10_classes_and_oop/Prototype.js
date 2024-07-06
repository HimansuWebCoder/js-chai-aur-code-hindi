// let myName = "himansu"
// let myName = "himansu     "
let mychannel = "himansu     "

// console.log(myName.trueLength); // I want true length
// console.log(myName.trim().length); // 7 
// but I want a method (trueLength) that extract truelength;


let myHeros = ["thor", "spiderman"]

let heroPower = {
	thor: "hammer",
	spiderman: "sling",

	getSpiderPower: function(){
		console.log(`Spidy power is ${this.spiderman}`);
	}
}

// factory function
Object.prototype.himansu = function(){
	console.log(`himansu is present in all objects`);
}

Array.prototype.heyHimansu = function(){
	console.log(`Himansu says hello`)
}

// heroPower.himansu()
myHeros.himansu()
myHeros.heyHimansu()
// heroPower.heyHimansu() // error show not access of heyHimansu function because Array prototype power to Array not give power to Object


// Inheritance

const User = {
	name: "chai",
	email: "chai@google.com"
}

const Teacher = {
	makeVideo: true
}

const TeachingSupport = {
	isAvailable: false
}

const TASupport = {
	makeAssignment: "Js assignment",
	fullTime: true,
	__proto__: TeachingSupport
}

// __proto__ - old method and deprecated
// also outside we do that
// Teacher.__proto__ = User // Teacher access prop of User

// console.log(Teacher.name) // chai // access prop

// those above not share any prop to anyone but
// if we exchange or link one to another then 

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function() {
	console.log(`${this}`);
	console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Himansu".trueLength()
"iceTea".trueLength()

// Great Indepth learning of prototype if you learn prototype object you can master javascript and also learning any framework and library 
// very easily how that works behind the scene or even create your own library or framework (Advanced)

