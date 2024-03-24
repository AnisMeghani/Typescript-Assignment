// Exercise 1 and 2
//1.Install Node.js, TypeScript and VS Code on your computer.

//2.Personal Message: Store a person’s name in a variable
//and print a message to that person. Your message should be simple,
//such as, “Hello Eric, would you like to learn some Python today?”


let personName :string = '';
personName = prompt('Please enter your name?') || '';
if(personName !== null && personName !== '')
{alert(`Hello ${personName}, Please continue`)}
else{alert('You have to fill your name !')}

let Occupation : string = '';
Occupation = prompt(`Please enter your Occupation?`) || '';
if(Occupation !== null && Occupation !== '')
{alert(`Ahh! ${Occupation}, Sounds Good`)}
else{alert('You have to fill your Occupation!')}
//just checking changing on github, not a part of a assignment
console.log('Checking changing on github')
