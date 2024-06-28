//Q63   21/06/2024

//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// including properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. 
// It's like a shortcut for describing more complex information, such as the details of different shapes.

type shapeTypes = {
    shape : "Circle" | "Rectangle",
    radius? : number, //for circle
    width? : number, //for rectangle
    height? : number  //for rectangle
}
// describing circle shape
let circle: shapeTypes = {
    shape: "Circle",
    radius: 9
}
// describing rectangle shape
let rectangle: shapeTypes = {
    shape: "Rectangle",
    width: 6,
    height: 4
}
//showing shapes with sizes
console.log(circle);
console.log(rectangle);


