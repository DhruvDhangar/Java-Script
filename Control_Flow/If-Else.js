// if - else

// const userloggedIn = true

// if (userloggedIn) {
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// conditional operators -> <, >, <=, >=, ==, !=, ===, !==

// block scope

// const score = 200

// if (score > 100) {
//     const power = "Jump"
//     console.log(`User can: ${power}`);
// }

// console.log(`User can: ${power}`); // cann't accessed out of scope

// This is not a good practice don't use implicit block.
// if(true) console.log("test"), console.log("test2");


// Nested if-else

// const value = 1000

// if (value < 300) {
//     console.log("Value is less than 300");
// }
// else if (value < 600) {
//     console.log("value is less than 600");
// }
// else{
//     console.log("Value is less than 1200");
// }

const userloggedIn = true
const debitCard = true

if(userloggedIn && debitCard){
    console.log("User can Purchase");
}