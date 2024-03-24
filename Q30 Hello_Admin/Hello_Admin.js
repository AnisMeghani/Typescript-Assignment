"use strict";
//14-03-2024    Exercise 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they log in to a website.
//Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let admin :string[] = ['Admin', 'Ali','Abid','Hasnain','Raza','Annu']
// for(let i=0; i<admin.length ; i++){
//     if(admin[i] === 'Admin'){
//         console.log('Hello admin, would you like to see a status report?')
//     }
//     else{
//         console.log(`Hello ${admin[i]}, thank you for logging in again.`)
//     }
// }
//another way foreach
let admin = ['Admin', 'Ali', 'Abid', 'Hasnain', 'Raza', 'Annu'];
admin.forEach(username => {
    if (username === 'Admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, Thank you for logging in again.`);
    }
});
