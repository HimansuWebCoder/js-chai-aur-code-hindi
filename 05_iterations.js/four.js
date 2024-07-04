const myObject = {
	js: 'javascript',
	cpp: 'c++',
	rb: "ruby",
	swift: "swift by apple"
}

for (const key in myObject) {
	// console.log(key); // keys
	// console.log(myObject[key]); // values
	// console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
	// console.log(key); // 0 1 2 3 4
	// console.log(programming[key]);
}

const map = new Map() // only take unique values and order
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

for (const key in map) {
	// console.log(key); // not show anything no error or value so this is not iterable map
}

