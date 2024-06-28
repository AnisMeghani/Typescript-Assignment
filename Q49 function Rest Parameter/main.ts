// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.


function restHobbies(...hobbies :string[] ){
    hobbies.forEach((hobby) => {
        console.log(`I enjoy ${hobby}`);
        
    });
}
restHobbies('Reading', 'Coding', 'Searching')
restHobbies('Help others', 'Web development')