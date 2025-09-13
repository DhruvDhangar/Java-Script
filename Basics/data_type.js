"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

// data types
/*
    number, bigint
    string
    boolean
    null => standalone value
    undefined => 
    symbol => unique
*/

console.log(typeof null) // object
console.log(typeof undefined) // undefined

let loginId = Symbol('123')
let sessionId = Symbol('123')

console.log(loginId == sessionId);
// Both the symbols are different no matter if it's values are same or not.

console.log(typeof loginId);
console.log(sessionId);

// Non - premitive data type. ==> Object, array, functions

let heros = ["ironman", "thor", "antman", "Doom"];

let fun = {
    name: "Dhruv",
    age: 20,
    height: "5'10"
}

let tryIt = function(){
    console.log("Hello JS");
}

console.log(typeof tryIt);
console.log(typeof fun);
console.log(typeof heros);
