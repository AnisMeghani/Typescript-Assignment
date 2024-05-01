// 01/05/2024    Exercise 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function sandwichMaker(items) {
    console.log('Your ordered variety of Sandwitches are: \n');
    items.forEach(function (Element) { return console.log('- ' + Element); });
    console.log('Thankyou for you order! \n');
}
sandwichMaker(['Club Sandwitch', 'BBQ Club Sandwitch', 'Chicken Sandwitch']);
sandwichMaker(['Sandwitch with extra cheese', 'Sandwitch with BBQ Sauce']);
sandwichMaker(['Zynger Sandwitch', 'Egg Butter Sandwitch']);
