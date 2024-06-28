//Q59  20/06/2024
//Question 59: Add a Special Number: Make a program that creates custom adders.
// These adders can add a specific number to any other number you give them later.
// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it.
// This program makes that magic box for you!
// This program makes a function that adds a specific number
function additionMaker(valueToAdd) {
    return function (number) {
        return valueToAdd + number;
    };
}
var magicBox = additionMaker(10);
console.log(magicBox(20));
