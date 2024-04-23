//21-04-2024   Exercise 39
//City Names: Write a function called city_country() that takes in the name of a city and its country.
//The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string, country:string){
    return (`The ${city} city is in ${country} `);
}
let country_city1 = (city_country('Brussel', 'Belgium'))
let country_city2 = (city_country('Tokyo', 'Japan'))
let country_city3 = (city_country('Toronto', 'Canada'))
let country_city4 = (city_country('Lahore', 'Pakistan'))
console.log(`${country_city1}
${country_city2} 
${country_city3}
${country_city4}`);

// describe_city('Brussel', 'Belgium')
// describe_city('Tokyo', 'Japan')
// describe_city('Karachi', 'Pakistan')