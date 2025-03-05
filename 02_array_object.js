let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"];

console.log (chaiTypes[2]);
console.log (`Total chai Types: ${chaiTypes.length}`);

//---------Methods--------
chaiTypes.push("Herbal Tea"); // Add an element at the end of the array
chaiTypes.pop(); // Remove an element from the end of the array

const data = chaiTypes.pop();
console.log (data);

let index = chaiTypes.indexOf("Green Tea");
console.log (index);

if (index !== -1) {
    chaiTypes.splice(index, 1);
}
console.log (chaiTypes);

chaiTypes.forEach((chai, index) => {
    console.log (`${index + 1}: ${chai}`);
})

let moreChaiTypes = ["Black Tea", "White Tea", "Oolong Tea"];
let allChaiTypes = chaiTypes.concat(moreChaiTypes); 
let newChaiTypes = [...chaiTypes, "Chamolina Tea"];
console.log (newChaiTypes);

let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves: "Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown Sugar",
        spices: ["Cardamom", "Cinnamon", "Ginger"]
    },
    instruction: "Boil Water, Add Tea Leaves, Add Spices, Add Milk, Add Sugar, Boil for 5 minutes"
}
console.log (chaiRecipe.ingredients.spices[1]);


let updatedChaiRecipe = {
    ...chaiRecipe,
    instruction: "Boil Water, add tea leaves, milk, sugar, spices, with some love",
}
console.log (updatedChaiRecipe);

let {name, ingredients} = chaiRecipe; // object Destructuring
let [firstChai , secondChai] = chaiTypes; // array Destructuring