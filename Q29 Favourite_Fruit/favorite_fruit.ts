//14-03-2024    Exercise 29
//Favorite Fruit: Make a array of your favorite fruits,
//and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits :string[] = ['Mango', 'Apple', 'Cherry']
if(favorite_fruits.includes('Mango')){
    console.log('I realy like Mangoes.')
}
else if(favorite_fruits.includes('Apple')){
    console.log('I realy like Apples.')
}
else if(favorite_fruits.includes('Cherry')){
    console.log('I realy like Cherries.')
}
else if(favorite_fruits.includes('Pineapple')){
    console.log('I realy like Pineapples.')
}
else if(favorite_fruits.includes('Banana')){
    console.log('I realy like Bananas.')
}
// else{
//     console.log('Please select right fruit.')
// }
