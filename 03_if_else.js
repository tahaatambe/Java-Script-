function prepareChai (type) {
    if (type === "Masala Chai") {
        return ("Adding spices to the chai");
    } else {
        return ("Preparing regular chai");
    }
}
prepareChai ("Masala Chai");
prepareChai ("Ginger Chai");

// ---------------------Challange - I------------------------
/*
Ek online store mein, agar customer ka total bill 1000 se zayda hai, to 10% discount milta hai. Nahi toh, full amount pay karna padta hai.
*/

function calculateTotal (amount) {
    // convert to number 
    let amount = parseInt(amount);

    // if (amount > 1000) {
    //     return amaount * 0.9;
    // }else {
    //     return amount;
    // }

    return amount > 1000 ? amount * 0.9 : amount;
}

let finalBill = calculateTotal (1200);
// console.log (finalBill);
// console.log (calculateTotal (800));


// ---------------------Challange - II------------------------
/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow Down" print karo, Agar "green" hai, toh "Go" print karo.
*/

function trafficLight (color) {
    switch (color) {
        case "red":
            return "Stop";
            break;
        case "yellow":
            return "Slow Down";
            break;
        case "green":
            return "Go";
            break;
        default:
            return "Chalan kaat do";
    }
}

trafficLight ("yellow");



function checktruthyValue (value) {
    if (value) {
        console.log ("Truthy");
    } else {
        console.log ("Falsy");
    }
}

checktruthyValue (1);
checktruthyValue (0);       
checktruthyValue ("Tahaa");
checktruthyValue ("");
checktruthyValue ([]);
checktruthyValue ([1, 2, 3]);



function login (username, password) {
    if (username === 'admin' && password === '1234') {
        return "Login Success";
    } else {
        return ("Login Failed");
    }
}