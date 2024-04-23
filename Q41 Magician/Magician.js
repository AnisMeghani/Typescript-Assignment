"use strict";
//23-04-2024    Exercise 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Umer Sharif', 'Harry Potter', 'Munawer Khan', 'Johnathan '];
function show_Magicians(magicians) {
    for (let i = 0; i < magician.length; i++)
        console.log(magicians[i]);
}
show_Magicians(magician);
