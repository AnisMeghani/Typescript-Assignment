"use strict";
//21-02-2024   Ex.13
// Your Own Array: Think of your favorite mode of transportation,
//such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”
let transportation = ['Bike', 'Car', 'Bus', 'Cycle', 'Train'];
const statement = 'I would like to own a ';
for (let i = 0; i < transportation.length; i++) {
    console.log(statement + transportation[i]);
}
