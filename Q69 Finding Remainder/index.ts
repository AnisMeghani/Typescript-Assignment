//Q69   21/06/2024

//Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder.
// Use an object to return both values.

// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder).
// Returning both in an object is a neat way to keep them together.

function divideAndRemainder(divnum1:number, divnum2:number):{quotient:number, remainder:number}{
    let quotient = Math.floor(divnum1 / divnum2)
    let remainder= divnum1 % divnum2
    return {quotient, remainder}
}
console.log(divideAndRemainder(1050, 52));
