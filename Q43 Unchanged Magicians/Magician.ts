//23-04-2024    Exercise 43
//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ['Umer Sharif', 'Harry Potter', 'Munawer Khan', 'Johnathan'];

function copy_Magician(copyArray: string[]) {
    return [...copyArray];
}

function make_great(modifyArray: string[]) {
    return modifyArray.map(element => 'The great ' + element);
}

function show_Magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
}

const copyMagicianArray = copy_Magician(magicians);
console.log('This is original\n');
show_Magicians(copyMagicianArray);

console.log('\n\nThis is modified\n');
const modifiedMagicianArray = make_great(magicians);
show_Magicians(modifiedMagicianArray);
