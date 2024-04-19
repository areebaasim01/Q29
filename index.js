"use strict";
// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
Object.defineProperty(exports, "__esModule", { value: true });
let favFruits = ["Peach", "Grapes", "Pinapple"];
if (favFruits.includes("Peach")) {
    console.log("you really like peach?");
}
if (favFruits.includes("Pinapple")) {
    console.log("you really like Pinapple?");
}
if (favFruits.includes("Grapes")) {
    console.log("you really like Grapes?");
}
if (favFruits.includes("Apple")) {
    console.log("you really like Apple?");
}
else {
    console.log("Apple is not in your favorite fruits list.");
}
if (favFruits.includes("Banana")) {
    console.log("you really like Banana?");
}
else {
    console.log("Banana is not in your favorite fruits list.");
}
