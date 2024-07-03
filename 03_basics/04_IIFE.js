// Immediately Invoked Function Expressions (IIFE)




(function chai() {
	// named IIFE
	console.log(`DB CONNECTED`);
})();


// global scope pollution ko hatane keliye use karte hain IIFE
// ()() 
// ( () => {
// 	console.log(`DB CONNECTED`);
// })()

// problem in above semicolon ; first IIFE end hona chaiye
// ( function aurcode() {
// 	console.log(`DB CONNECTED`);
// })()

((name) => { // unnamed IIFE
	console.log(`DB CONNECTED TWO ${name}`);
})("Himansu")

// when create or write tow IIFE then must use ; semicolon for end first
// very small minor issue most people don't mark 
