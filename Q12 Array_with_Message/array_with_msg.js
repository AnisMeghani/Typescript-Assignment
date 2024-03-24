"use strict";
//21-2-24
//Ex.12 Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same,
//but each message should be personalized with the person’s name.
let friends_names = ['Abid', 'Hasnain', 'Raza', 'Arslan', 'Usman'];
const message_1 = 'Hello! ';
const message_2 = ', Happy Friendship Day :)';
for (let i = 0; i < friends_names.length; i++) {
    console.log(message_1 + friends_names[i] + message_2);
}
