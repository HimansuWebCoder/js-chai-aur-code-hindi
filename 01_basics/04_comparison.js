// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true // use same data type don't use like this
// console.log("02" > 1); // true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true predictable result

// The reason is that an equality check == and comparisons > < >= <= work differently.
// comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) 0 is false.


// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// comparisons and equality check are different thing


// === strict equality check

// console.log("2" === 2); // no conversion strict check

// clean code has highest value and priority don't compare non-same data type 
