// Q56  20/06/24

// Question 56: Keep Only Strings: Given a mix of different types of items, 
// make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items,
// creating a list that includes only those words.

//mixed bag of elements
let mixedArray = [2, "Fruits", 4, 6, "Vegetables", 10, 3, true, "Beverages"]

//selection of only words
let wordsSelect = mixedArray.filter(items => typeof items === "string")

//print only strings
console.log(wordsSelect);


