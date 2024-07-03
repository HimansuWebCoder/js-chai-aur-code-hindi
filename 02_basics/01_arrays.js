// array

// const myArr = [0, 1, 2, 3, 4, 5, true, "himansu"];
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array methods

// myArr.push(6)
// myArr.push(7) // add in last
// myArr.pop() // remove last item
// console.log(myArr);

// myArr.unshift(9) // some people don't want this because it shifted all the value right side all value so computer load much,
 // we should don't load on computer,
// that but practice it before optimzation later you can do but now practice in todos like
// myArr.shift() // remove first item
// console.log(myArr)

// console.log(myArr.includes(9)) // false , 9 not exist or include
// console.log(myArr.includes(3)) // true , 3 exist

const newArr = myArr.join()

// console.log(myArr) // [0, 1, 2, 3, 4, 5]
// console.log(newArr) // 0, 1, 2, 3, 4, 5 convert into string

// slice, splice

console.log("A ", myArr); // A [0, 1, 2, 3, 4, 5] 

const myn1 = myArr.slice(1, 3)  // include first & not last

console.log(myn1) // [1, 2]
console.log("B ", myArr) // B [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3) // include first & last
console.log(myn2) // [1, 2, 3]
console.log("C ", myArr) // C [0, 4, 5]   // oh! this changed my original array and 
// so aware which array method changes original array and which are not

