//Exercise 6
//Stripping Names: Store a person’s name,
//and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination,
//"\t" and "\n", at least once. Print the name once,
//so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.


const PersonName_with_white_space :string = ' \n\t Muhammad Anis Meghani \t\n'
console.log(PersonName_with_white_space) ;

const without_whitespace :string =  PersonName_with_white_space.trim();
console.log(without_whitespace) ;

