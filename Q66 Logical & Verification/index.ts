//Q66   21/06/2024

//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values.
// It should only say true if both are true, using the && operator.
// For instance, checkBothTrue(true, false) should be false.

// Explain & TIP: The && operator in JavaScript checks if both sides are true.
// It's great for confirming several things are true all at once.

function checkNbalance(userId:boolean, password: boolean):boolean{
    return userId && password
}
//trying different arguments
console.log(`The result for true & false: `+ checkNbalance(true, false));//it should b false
console.log(`The result for true & true: `+ checkNbalance(true, true));//it should b true
console.log(`The result for false & false: `+ checkNbalance(false, false));//it should b false





