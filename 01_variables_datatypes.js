let name = "Tahaa Tambe"
const pi = 3.14

//----------------------------------------------

let number = 42 // Number 
let text = "Hello" // String
let isTrue = true // Boolean
let nothing = null // Object (Null)
let underinedvar = undefined // Undefined
let symbolVAr = Symbol(); // Symbol

console.log (typeof nothing);
console.log (typeof symbolVAr);

//-----------------------------------------------

let person = {
    name: "Tahaa",
    age: 25,
    isStudent: true
}

let num = "42"
// let convertedNum = Number(num); //(use this most of the time bcoz this is standard way of converting)
// let convertedNum = +num;
let convertedNum = parseInt(num);

console.log (typeof convertedNum);

let str = 123
let convertedSring = String(str);

// ----------------------------------------------

(parantisis) // are for best friends for Preforming Operations 

let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

//-----------------------------------------------

let x = 5;
let y = 10;

// == sirf data check karta hai & === data + type check karta hai
console.log (x == y); // Equal to
console.log (x != y); // Not Equal to
console.log (x > y); // Greater than
console.log (x < y); // Less than
console.log (x >= y); // Greater than or Equal to
console.log (x <= y); // Less than or Equal to

//-----------------------------------------------

console.log (Math.max(5,10));
console.log (Math.min(5,10));
console.log (Math.floor(5,10));
console.log (Math.random() * 10);

//---------------------Task - I------------------------


//---------------------Task - I End--------------------


// --------String--------

let firstName = "Tahaa";
let lastName = "Tambe";

let fullName = firstName + " " + lastName;
let message = "Good Afternoon";

console.log (message.length); // Length of the string
console.log (message.toUpperCase()); // Upper Case (Emails saved in database in lower case)
console.log (message.toLowerCase()); // Lower Case (Coupon Codes saved in database in upper case)
console.log (message.indexOf("World")); // It gives me index of sub string
console.log (message.slice(0, 5)); //  

let myName = "Tahaa";
let greeting = `Hello, ${myName}, from ChaiCode`;

