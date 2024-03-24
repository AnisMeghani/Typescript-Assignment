"use strict";
//21-02-2024   Ex.15
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
let guest_name = ['Hasnain', 'Abid', 'Raza'];
for (let i = 0; i < guest_name.length; i++) {
    console.log('Dear Mr. ' + guest_name[i] + '\n\nIt is my pleasure to invite you in a birthday party of my son Muhammad Ayan Meghani.\n\nThankyou.\n');
}
let absent_guest = 'Abid';
let new_guest = 'Arslan';
guest_name[1] = new_guest;
for (let i = 0; i < guest_name.length; i++) {
    console.log('Dear Mr. ' + guest_name[i] + '\n\nIt is my pleasure to invite you in a birthday party of my son Muhammad Ayan Meghani.\n\nThankyou.\n');
}
console.log(`Mr. ${absent_guest} is not coming to the party because he is out of town.`);
