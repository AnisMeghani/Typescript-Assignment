"use strict";
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
// and refactor it into an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
function areaOf_Rectangle(width, height) {
    return width * height;
}
//Refactored into an arrow function
let result_area_of_Rectangle = (width, height) => width * height;
console.log(result_area_of_Rectangle(5, 20));
