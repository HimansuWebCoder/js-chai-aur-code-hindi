 class User {
 	constructor(email, password){
 		this.email = email;
 		this.password = password
 	}

    get email(){
    	return this._email.toUpperCase()
    }

    set email(value){
    	this._email = value
    }

 	get password(){
 		// return this._password.toUpperCase()
 		return `${this._password}himansu`
 	}

 	set password(value){
 		this._password = value
 	}
 }

 const himansu = new User("h@himansu.ai", "123")
 // console.log(himansu.password) // 123himansu
 console.log(himansu.email) // H@HIMANSU.AI