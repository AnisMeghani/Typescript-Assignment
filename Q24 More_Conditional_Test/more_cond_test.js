"use strict";
// 11-02-2024  Exercise: 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//If you want to try more comparisons, write more tests.
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
let stName = 'Annu';
let Num = 5;
console.log(stName === 'Annu', 'Equality Test with string'); // Tests for equality with string
console.log(stName != 'Ali', 'Inequality Test with string'); // test for  inequality with strings
console.log('Annu' != 'Ali'); //youtube ka tareeqa
console.log(stName.toLowerCase() === 'Annu', 'using Lowercase test'); // Tests using the lower case function
console.log(Num === 10, 'Numeric test equality'); // Numerical tests involving equality and inequality
console.log(Num != 10, 'Numeric test inequalty'); // Numerical tests involving inequality
console.log(10 != 5); //youtube se inequality test
console.log(Num > 8, 'Greater than test'); //greater than and less than,
console.log(Num < 8, 'Less than test');
console.log(Num >= 8, 'Greater than or equal to test'); //greater than or equal to
console.log(Num <= 8, 'Less than or equal to test');
console.log(Num === 10 && Num < 10, 'using and operator'); //Tests using "and" 
console.log(Num === 2 || Num > 2, 'using or operator'); //Test using "or" operators
//Test whether an item is in a array
let myFriends = ['Abid', 'Hasnain', 'Raza'];
console.log('Test name "Abid" is in a array: ', myFriends.includes('Abid'));
//• Test whether an item is not in a array
console.log('Test name "Ali" is not in a array: ', myFriends.includes('Ali'));
console.log('Test name "Ali" is not in a array:', !myFriends.includes('Ali')); //not "!" laga k check kya
