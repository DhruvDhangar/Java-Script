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

// console.log(typeof null) // object
// console.log(typeof undefined) // undefined

let loginId = Symbol('123')
let sessionId = Symbol('123')

console.log(loginId == sessionId);
// Both the symbols are different no matter if it's values are same or not.

// console.log(typeof loginId);
// console.log(sessionId);

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

// console.log(typeof tryIt);
// console.log(typeof fun);
// console.log(typeof heros);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive) & Heap(Non - primitive)

let myaccount = "Dhruv Dhangar"
let anotheraccount = myaccount

anotheraccount = "Dhangar Dhruv"

console.log(myaccount);
console.log(anotheraccount);


let Obj1 = {
    name: "Dhruv",
    age: 21,
    upi: "user@yespop"
}

let Obj2 = Obj1

Obj2.upi = "Hello@yespop"

console.log(Obj1.upi); // Both the values are changed
console.log(Obj2.upi); // beacause they are using heap --> pass by reference
