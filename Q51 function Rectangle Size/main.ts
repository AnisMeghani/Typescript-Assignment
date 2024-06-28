// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
// and refactor it into an arrow function.

function areaOf_Rectangle(width: number, height: number):number {
    return width * height
}
//Refactored into an arrow function
let result_area_of_Rectangle = (width:number , height:number) :number => width * height
console.log(result_area_of_Rectangle(5, 20));
