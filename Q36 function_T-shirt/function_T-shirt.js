"use strict";
//21-04-2024   Exercise 36
Object.defineProperty(exports, "__esModule", { value: true });
// T-Shirt: Write a function called make_shirt() that accepts a size
//and the text of a message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it.
//Call the function.
function make_shirt(size) {
    console.log(`${size} T-shirt, Never Giveup!`);
}
make_shirt('Large');
make_shirt('Medium');
make_shirt('Small');
