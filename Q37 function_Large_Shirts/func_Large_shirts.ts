//21-04-2024   Exercise 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message,
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message
//and a shirt of any size with a different message.
function make_shirt(size:string = 'Large', text:string = 'I love TypeScript.'){
    if(size === 'Large'){
    console.log(`Size: ${size} Shirt, ${text}`);}
    else if(size === 'Medium'){
        console.log(`Size: ${size} Shirt, ${text}`)
    }
    else{
    console.log(`Size: ${size} Shirt, Versace`);
    }
}
make_shirt()
make_shirt('Medium')
make_shirt('Small')
make_shirt('X-Large')
