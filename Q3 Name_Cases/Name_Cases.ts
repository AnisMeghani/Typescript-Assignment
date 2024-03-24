// Exercise 3
//Name Cases: Store a person’s name in a variable
//and then print that person’s name in lowercase, uppercase, and titlecase

let PersonName :string = '';
PersonName = prompt('What is your name?') || '';
let lowercase :string = PersonName.toLowerCase() ;
let uppercase :string = PersonName.toUpperCase() ;
let titlecase :string = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if (PersonName !== null && PersonName !== ''){
    alert(`Hey! ${PersonName}, Here are your name in:
    Lower Case: ${lowercase}
    Upper Case: ${uppercase}
    Title Case: ${titlecase}`)
}
else{alert(`Please fill your name!`)}