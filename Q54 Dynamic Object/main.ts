// Q54 - Making Flexible Object Keys: Learn how to set up a list 
// where you can change the name of each section based on what you need at that moment,
// like adjusting labels based on user choices.

// A way to make a flexible list
function FlexibleObject(key:string , value:string){
    let dynamicObject: {[key:string]:string} ={};
// Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject
}
// users preference using
let userChoice = FlexibleObject('Volume', 'Max')
//showing users choice
console.log(userChoice);

