const accountId = 123443;
// or const account_Id = 123443;
let accountEmail = "himansu@gmail.com";
var accountPassword = "12345";
accountCity = "Bhubaneswar";
let accountState;


// accountId = 2; // not allowed
accountEmail = "hc@gmail.com";
accountPassword = "2121221";
accountCity = "Bengaluru";

// console.log(accountId)

// {
// 	this is block scope
// }

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);