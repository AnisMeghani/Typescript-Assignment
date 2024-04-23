"use strict";
//23-04-2024    Exercise 42
//Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
const magician = ['Umer Sharif', 'Harry Potter', 'Munawer Khan', 'Johnathan '];
function make_great(modArray) {
    modArray.forEach(element => {
        console.log('The great ' + element);
    });
}
function show_Magicians(magicians) {
    for (let i = 0; i < magicians.length; i++)
        magician[i] = magicians[i];
}
make_great(magician);
show_Magicians(magician);
