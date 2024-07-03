// const tinderUser = new Object() // singleton // constructors
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser = {
	email: "some@gmail.com",
	fullname: {
		userfullname: {
			firstname: "Himansu",
			lastname: "naik"
		}
	}
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) // {} optional parameter, guranteed result
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} optional parameter, guranteed result, production grade target source
// console.log(obj3);

const obj3 = {...obj1, ...obj2} // most of the time you use this
// console.log(obj3);


// when value goes from database like this array of objects
const users = [
      {
      	id: 1,
      	email: "h@gmail.com"
      },
      {
      	id: 1,
      	email: "h@gmail.com"
      },
      {
      	id: 1,
      	email: "h@gmail.com"
      },
      {
      	id: 1,
      	email: "h@gmail.com"
      },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // convert in array keys
// console.log(Object.values(tinderUser)); // convert in array values
// console.log(Object.entries(tinderUser)); // all key value converting in array of array

// console.log(tinderUser.hasOwnProperty("IsLoggedIn")); // true
// console.log(tinderUser.hasOwnProperty("IsLogged")); // false


// object destructuring much use in React.js
const course = {
	coursename: "js in hindi",
	price: "999",
	courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);


// In react.js just talk
// const navbar = (props.companies) => { instead of this

// }

// const navbar = ({company}) => {

// }

// navbar(company = "himansu") same concepts comes in react.js destructuring



// JSON (API)

// This is not object it is JSON not store it in a variable 
// this is used in almost every language like this API json ruby, rails, python, javascript
// {
// 	"name": "himansu",
// 	"coursename": "js in hindi",
// 	"price": "free"
// }


// [
//   {},
//   {},
//   {}
// ]

// you can use API of  Random User generator website(JSON)
// JSON formatter website go and try and play 
// also we can create our own API

// when you listen API then the format is like this JSON



