"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//21-04-2024   Exercise 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan.
//Give the parameter for the country a default value.
//Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = 'France') {
    console.log(`The ${city} city is in ${country} `);
}
describe_city('Paris');
describe_city('Brussel', 'Belgium');
describe_city('Tokyo', 'Japan');
describe_city('Karachi', 'Pakistan');
