"use strict";
//21-04-2024   Exercise 40
//Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, 
//and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
Object.defineProperty(exports, "__esModule", { value: true });
//?undefined k lye likha jata ha
function make_album(artistName, albumTitle, numOfTracks) {
    let album1 = {
        artistName: artistName,
        albumTitle: albumTitle,
    };
    if (numOfTracks !== undefined) {
        album1.numOfTracks = numOfTracks;
    }
    return album1;
}
let make_album1 = make_album('Artist 1', 'album 1');
let make_album2 = make_album('Artist 2', 'album 2');
let make_album3 = make_album('Artist 3', 'album 3', 10);
console.log(make_album1);
console.log(make_album2);
console.log(make_album3);
