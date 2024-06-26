"use strict";
//Array Destructuring: Given an array of objects representing different laptops.
// each with properties make, model and year, use array destructuring to assign the first and second laptops to variables.
// then, log these variables
Object.defineProperty(exports, "__esModule", { value: true });
let Array_laptops = [
    { make: "Acer", model: "Aspire 5750", year: 2013 },
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
let [laptop1, laptop2, laptop3] = Array_laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
