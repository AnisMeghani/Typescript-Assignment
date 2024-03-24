"use strict";
//21-02-2024   Ex.16
//More Guests: You just found a bigger dinner table,
//so now more space is available.
//Think of three more guests to invite to dinner.
//Start with your program from Exercise 15.
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array.
//Use append() to add one new guest to the end of your list.
//Print a new set of invitation messages, one for each person in your list.
let guest_name = ['Hasnain', 'Abid', 'Raza'];
// for(let i=0; i<guest_name.length; i++){
//     console.log('Dear Mr. ' + guest_name[i] + '\n\nIt is my pleasure to invite you in a birthday party of my son Muhammad Ayan Meghani.\n\nThankyou.\n')
// }
let absent_guest = 'Abid';
let new_guest = 'Arslan';
guest_name[1] = new_guest;
for (let i = 0; i < guest_name.length; i++) {
    console.log('Dear Mr. ' + guest_name[i] + '\n\nIt is my pleasure to invite you in a birthday party of my son Muhammad Ayan Meghani.\n\nThankyou.\n');
}
console.log(`Mr. ${absent_guest} is not coming to the party because he is out of town.`);
console.log('Good news, I have found a bigger space for party, now inviting 3 more friends :)');
guest_name.unshift('Raza Merchant'); //zero index se pehle name add karne k lye
guest_name.splice(2, 0, 'Abbas'); //splice ma pehle index number dalte hain, phr kitne delete karne hain, phr jo add karna hota ha
guest_name.push('Ali Abbas'); //mazeed names add karne k lye
for (let i = 0; i < guest_name.length; i++) {
    console.log('Dear Mr. ' + guest_name[i] + '\n\nIt is my pleasure to invite you in a birthday party of my son Muhammad Ayan Meghani.\n\nThankyou.\n');
}
