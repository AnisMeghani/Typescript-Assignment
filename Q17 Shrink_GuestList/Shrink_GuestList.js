"use strict";
//26-02-2024   Ex.17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
//•Start with your program from Exercise 16.
//Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list,
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list,
//letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list.
//Print your list to make sure you actually have an empty list at the end of your program.
//creating array list for guest list
let guest_name = ['Hasnain', 'Abid', 'Raza'];
//absent guest ki jaga dosra guest added
let absent_guest = 'Abid';
let new_guest = 'Arslan';
guest_name[1] = new_guest;
//guest ko replace kar k invitation chalaya ha
for (let i = 0; i < guest_name.length; i++) {
    console.log('Dear Mr. ' + guest_name[i] + '\n\nIt is my pleasure to invite you in a birthday party of my son Muhammad Ayan Meghani.\n\nThankyou.\n');
}
console.log(`Mr. ${absent_guest} is not coming to the party because he is out of town.`);
console.log('\nGood news, I have found a bigger space for party, now inviting 3 more friends :)');
//added 3 more guests
guest_name.unshift('Raza Merchant'); //zero index se pehle name add karne k lye
guest_name.splice(2, 0, 'Abbas'); //splice ma pehle index number dalte hain, phr kitne delete karne hain, phr jo add karna hota ha
guest_name.push('Ali Abbas'); //mazeed names add karne k lye
//here print 6 guest of array
for (let i = 0; i < guest_name.length; i++) {
    console.log('Dear Mr. ' + guest_name[i] + '\n\nIt is my pleasure to invite you in a birthday party of my son Muhammad Ayan Meghani.\n\nThankyou.\n');
}
//working for exercise 17 continue from 16
//sorry message for not inviting 
console.log('\nBad news, I could not found a bigger space for a party, now can invite only 2 friends :)');
//remove all guest instead of 2
while (guest_name.length > 2) {
    let remove_guest = guest_name.pop();
    console.log(`\nSorry Mr. ' ${remove_guest}, As i could not found a bigger space, so you are not invited`);
}
//2 left invited guest
for (let i = 0; i < guest_name.length; i++) {
    console.log('Dear Mr. ', guest_name[i], '\n\nYou are still invited.\n');
}
//removed all guest from array
guest_name.splice(0, 2);
console.log(guest_name);
