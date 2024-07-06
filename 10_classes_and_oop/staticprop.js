class User {
	constructor(username){
		this.username = username
	}

	logMe(){
		console.log(`Username: ${this.username}`)
	}

	static createId(){ // not access for you 
		return `123`
	}
}

const himansu = new User("himansu")
// console.log(himansu.createId()) // 123

class Teacher extends User {
	constructor(username, email){
		super(username)
		this.email = email
	}
}

const iphone = new Teacher("iphone", "i@phone.com")

// iphone.logMe() // iphone
console.log(iphone.createId()) // not access also by child