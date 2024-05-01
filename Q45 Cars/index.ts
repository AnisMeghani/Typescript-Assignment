// 01/05/2024    Exercise 45
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function Store_Car_Info(Manufacturer: string, Model: string, Year: Number, ...ExtraOption: {[key:string] :any} [] ):object{
    const Car_Info = {
    Manufacturer,
    Model,
    Year,
    ...Object.assign({}, ...ExtraOption )
    }
    return Car_Info
}
let Output_Car_Info =Store_Car_Info ('Honda', 'City', 2009, {colour: 'Grey'}, {Features: ['Automatic', 'Power stearting', 'Mint Condition']})
console.log(Output_Car_Info);
