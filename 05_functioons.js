function greet (name) {
    console.log (`Hello ${name}`);
}

greet ("Hitesh")
greet ("Piyush")

let globalVar = "I am global"

function modifyGlobal () {
    globalVar = "I am modified"
    let blockScopedVar = " I am blocked-scoped"
    console.log (blockScopedVar);
}

modifyGlobal ()

// IIFE - Immediately Invoked Function Expression
let config = function () {
    let settings = {
        theme: "dark"
    }
    return
} ()
(() => {}) () // IIFE - Immediately Invoked Function Expression


// let person1 = {
//     name: "Ravi",
//     greet: function () {
//         console.log (`Hello ${this.name}`);
//     }
// }

// let person2 = {
//     name: "Hitesh"
// }
// person1.greet.call (person2) // call jo hai wo actually mei call karta hai sidha function ko

// const bindGreet = person1.greet.bind (person2) // new function return karta hai jo call karna hai
// bindGreet()
// console.log (bindGreet())
// person1.greet.bind (person2) // new function return karta hai jo call karna hai 

// --------------------------------------------

let person1 = {
    personsName: "Ravi",
    greet: function () { (`Hello, ${this.personsName}`);
    },
};

let person2 = { 
    personsName: "Hitesh",
} 
person1.greet.call ({personsName: "Mukul" });