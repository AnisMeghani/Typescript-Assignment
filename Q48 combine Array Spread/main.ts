//Combining arrays with spread operator, Suppose u r compairing prices of two different sets of laptops
//use the spread operator to combine these arrays into a single array sorted in ascending order,
//then log the result

let Price_set1 =  [1500, 2000, 1900, 800]
let Price_set2 = [1200, 2400, 500, 1000]
let combine_prices = [...Price_set1, ...Price_set2].sort((a , b) => a - b)
console.log(combine_prices);
