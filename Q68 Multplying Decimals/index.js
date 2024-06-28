//Q68   21/06/2024
//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
// Round the result to two decimal places.
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long.
// Rounding can help keep numbers manageable.
function mulDecimals(num1, num2) {
    return Math.round(num1 * num2); //math.round makes the result in round figure
}
console.log(mulDecimals(5.3422, 23.25989));
